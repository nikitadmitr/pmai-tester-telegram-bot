// Обьекты формируют полный ответ пользователю. On(включён) может быть 1 или 0
const archetypeName = {
    text: "Название архетипа: "
}
const archetypeDescription = {
    text: "\nОписание архетипа: ",
    on: 1
}
const allTheQuestions = {
    text: "\n\nВсе вопросы:\n",
    on: 0
}
const allTheArchetypes = {
    text: "\n\nВсе архетипы:\n",
    on: 0
}

// Текстовые выводы со стороны бота
const greetings = "Привет! Я тест-бот на архетипы. Чтобы начать тест введи /test"
const botIsNotStarted = "Кажется бот ещё не запущен. Чтобы запустить, введите /start"
const testIsNotStarted = "Пожалуйста введите команду /test, чтобы начать тестирование"
const unknownAnswer = "Кажется, вы ввели что-то непонятное -_-"
const reStarted = "Данные сброшены"
const wrongSecretKey = "Вы ввели неправильный код. Пожалуйста введите ещё раз"
const secretKeyRequest = "Введите секретный код"

// Секретный ключ для доступа к боту
const secretKey = '111'

// Экспорт
module.exports = {
    archetypeName,
    archetypeDescription,
    allTheQuestions,
    allTheArchetypes,
    greetings,
    testIsNotStarted,
    botIsNotStarted,
    unknownAnswer,
    reStarted,
    wrongSecretKey,
    secretKey,
    secretKeyRequest
};