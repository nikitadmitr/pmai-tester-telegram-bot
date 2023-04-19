// Подключение модулей
const { answers, archetypes } = require('../data/main_data');
const { questions } = require('../data/questions');
const { archetypeName,
    archetypeDescription,
    allTheQuestions,
    allTheArchetypes,
    greetings,
    testIsNotStarted,
    botIsNotStarted,
    unknownAnswer,
    advancedVersion,
    reStarted,
    secretKey,
    wrongSecretKey,
    secretKeyRequest } = require('./utils/config');
const { Telegraf } = require('telegraf')
require('dotenv').config()

// Инициализация бота и получение ключа из файла .env
const telegramApiKey = process.env.TELEGRAM_API_KEY
const bot = new Telegraf(telegramApiKey)

// ID админа
const adminUserId = +process.env.ADMIN_ID

// Массив с ответами, флаги, важные данные
let userAnswers = []

let isStarted = false
let isTested = false
let secretKeyIsEntered = false
let flagForStartTestingRequest = 0

// Функция сбрасывает значения для повторного тестирования
function resetTest() {
    userAnswers = [];
    isTested = false;
    secretKeyIsEntered = false;
    flagForStartTestingRequest = 0
}

// Функция возвращает true или false в зависимости от состояния бота (запущен ли бот)
function checkBotStarted(ctx) {
    if (!isStarted) {
        ctx.reply(botIsNotStarted);
        return false;
    }
    return true;
}

// Функция возвращает true или false в зависимости от состояния бота (начат ли тест)
function checkTestStarted(ctx) {
    if (!isTested) {
        ctx.reply(testIsNotStarted);
        return false;
    }
    return true;
}

// Функция отправляет вопрос
function sendQuestion(ctx) {
    const questionIndex = userAnswers.length

    // Если вопрос последний то выполнить функцию sendResults (отправить результаты)
    if (questionIndex === questions.length) {
        return sendResults(ctx)
    }

    // Получение информации о вопросе и его ответах
    const question = questions[questionIndex]
    const questionText = question.question
    const answers = question.answers.map((answer) => answer.text)

    // Вывод вопроса и кнопок с ответами в чат
    ctx.reply(`Вопрос №${questionIndex + 1}. ${questionText}`, {
        reply_markup: {
            keyboard: [answers],
            one_time_keyboard: true,
            resize_keyboard: true,
            remove_keyboard: !isTested
        }
    })
}

// Функция возвращает результат тестирования
async function sendResults(ctx) {

    // Скопировать массив archetypes в массив userArchetypes
    const userArchetypes = archetypes.map((archetype) => ({ ...archetype }))

    // Перебор массива userAnswers. Index - индекс, answer - обьект с ответом { text: '...', points: N}
    userAnswers.forEach((answer, index) => {

        // Записывает в переменную archetypeIndex индекс архетипа, который соответствует вопросу
        const archetypeIndex = userArchetypes.findIndex(
            (archetype) => archetype.text === questions[index].archetype
        );

        // Прибавляет к выбранному архетипу количество очков по ответу
        userArchetypes[archetypeIndex].points += answer.points;
    });

    // Возвращает архетип набравший максимальное количество очков в переменную result
    const result = userArchetypes.reduce((prev, curr) =>
        prev.points > curr.points ? prev : curr
    )

    // Создаёт чистый и полный ответ для пользователя. Учитывает настройки в config.js
    // Также возвращает полный ответ, для отправки админу
    let fullResult = `${archetypeName.text}${result.text}`
    let userResult = `${archetypeName.text}${result.text}`

    fullResult += `${archetypeDescription.text}${result.description}`
    if (archetypeDescription.on) {
        userResult += `${archetypeDescription.text}${result.description}`
    }

    const clearAllTheQuestions = userAnswers.map((answer, index) => `Вопрос №${index + 1}. ${questions[index].question}: ${answer.text}`).join('\n');

    fullResult += `${allTheQuestions.text}${clearAllTheQuestions}`
    if (allTheQuestions.on) {
        userResult += `${allTheQuestions.text}${clearAllTheQuestions}`
    }

    const clearAllTheArchetypes = userArchetypes.map((archetype) => `${archetype.text}: ${archetype.points}`).join('\n');

    fullResult += `${allTheArchetypes.text}${clearAllTheArchetypes}`;
    if (allTheArchetypes.on) {
        userResult += `${allTheArchetypes.text}${clearAllTheArchetypes}`;
    }

    // Отправление админу файла с результатами теста, где название файла - текущая дата и username пользователя
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const username = ctx.from.username
    const filename = `${currentDay}-${currentMonth}-${currentYear}-${username}.txt`;
    const buffer = Buffer.from(fullResult, 'utf-8');
    await ctx.telegram.sendDocument(adminUserId, { source: buffer, filename: filename })

    // Возвращает чистый и полный ответ пользователю
    ctx.reply(userResult)

    // Функция сбрасывает значения для возобновления теста
    resetTest();
}

// Функция для начала тестирования
const botOnStartTesting = (ctx) => {
    // Проверка, был ли уже запущен тест
    if (!checkBotStarted(ctx)) {
        return
    }

    isTested = true

    // Отправка первого вопроса, если известен секретный код
    if (secretKeyIsEntered) {
        sendQuestion(ctx)
    } else {
        if (!flagForStartTestingRequest) {
            ctx.reply(secretKeyRequest)
        }
    }
}

// Функция для отслеживания текста. (при вводе /test со стороны пользователя)
const botOnText = (ctx) => {

    // Проверки запущен ли бот и тест
    if (!checkBotStarted(ctx)) {
        return;
    }
    if (!checkTestStarted(ctx)) {
        return;
    }

    // Если пользователь не вводил ключ доступа, то получить ключ доступа, иначе засчитывать ответы на вопросы
    if (!secretKeyIsEntered) {
        isTested = false

        // Если польхователь ввёл правильный ключ доступа, то поменять значения флагов и задать первый вопрос, иначе заново запросить ключ
        if (secretKey === ctx.message.text) {
            secretKeyIsEntered = true
            isTested = true
            sendQuestion(ctx)
        } else {
            ctx.reply(wrongSecretKey)
            flagForStartTestingRequest = 1
            botOnStartTesting(ctx)
        }
    } else {
        // Записать в answerIndex индекс ответа пользователя
        const answerIndex = questions[userAnswers.length].answers.findIndex(
            (answer) => answer.text === ctx.message.text
        )

        // Если ответ не соответствует ни одному из предложенных т.е. answerIndex = -1
        if (answerIndex === -1 && secretKeyIsEntered) {
            ctx.reply(unknownAnswer)
            return
        }

        // Записать в переменную answer объект ответа и добавить этот объект в массив userAnswers
        const answer = questions[userAnswers.length].answers[answerIndex]
        userAnswers.push(answer)

        // Задать следующий вопрос
        sendQuestion(ctx)
    }
}

// Функция для запуска бота. (при вводе /start со стороны пользователя)
const botOnStart = (ctx) => {

    // Проверка, был ли уже запущен бот
    if (isStarted && !flagForStartTestingRequest) {
        ctx.reply(reStarted)
        return
    }

    // Сброс данных при новом /start
    resetTest();

    isStarted = true

    // Приветствие
    ctx.reply(greetings)
}

// Функция срабатывает при запуске бота. (при вводе /start со стороны пользователя)
bot.start((ctx) => {
    botOnStart(ctx)
})

// Функция срабатывает при вводе /test со стороны пользователя
bot.hears('/test', (ctx) => {
    botOnStartTesting(ctx)
})

// Функция обработки сообщений пользователя
bot.on('text', (ctx) => {
    botOnText(ctx)
})

// Обработка ошибок, если произойдет какая-либо ошибка, бот выведет сообщение об ошибке
bot.catch((err, ctx) => {
    console.log(`Ошибка ${ctx.updateType}`, err)
})

bot.launch()