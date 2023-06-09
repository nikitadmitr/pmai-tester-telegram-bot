# Тест-бот на архетипы

Данный бот используется для проведения теста на определение архетипов личности. Он задает пользователю набор вопросов, на которые пользователь должен ответить. После того, как все ответы получены, бот выводит результаты теста в виде архетипа, подходящего для конкретного пользователя.

## Установка

1. Склонируйте репозиторий на свой компьютер с помощью команды `git clone https://github.com/nikitadmitr/pmai-tester-telegram-bot`>.
2. Установите все необходимые зависимости с помощью команды `npm install`.
3. Создайте в корневой папке файл `.env` и добавьте в него следующие данные:
    
    ```
    TELEGRAM_API_KEY=<ваш токен телеграм-бота>
    ADMIN_ID=<ваш ID в телеграм>
    
    ```
    
4. Запустите бота с помощью команды `npm start`.

## Использование

После команды /start бот считается запущенным. Есть всего одна команда для бота `/test`. После ввода `/test`, бот начнёт перебирвать вопросы из файла `./data/questions.js`. После завершения теста, бот выведет результаты в формате, указанном в файле config.js, подходящего для пользователя

## Конфигурация

### config.js

В файле `config.js` находятся настройки бота. Они включают в себя текстовые выводы бота, настройки вывода результатов теста, а также секретный ключ для доступа к боту.

Чтобы поменять результаты, которые в конце приходят пользователю, необходимо в файле config.js поменять параметры on для нужных объектов:

1. archetypeDescription - описание архетипа
2. allTheQuestions - ответы на все вопросы
3. allTheArchetypes - очки по всем архетипам

Также можно поменять все текстовые выводы, которые есть в боте в файле config.js

Константа secretKey в config.js устанавливает секретный код для старта теста

### Папка data

### main_data.js

В этом файле можно поменять общий массив с ответами. Можно как удалить элемент, так и добавить. Значение points указывает на количество очков за ответ (его также можно менять)
В массиве archetypes можно менять архетипы, их описание, стартовое количество очков. Также можно добавлять и удалять архетипы, но следует учтить, что при удалении архетипа, который присутствует в файле questions.js в параметре archetype, произойдет ошибка, если также не поменять (или не удалить) архетип из параметра этого параметра. Например, при удалении архетипа 'Герой' из файла main_data.js, необходимо удалить вопросы, или поменять значение архетипа в файле questions.js

Было:

```
    {
        question: 'Я готов пойти на риск ради защиты своих убеждений',
        answers: answers,
        archetype: 'Герой'
    }

```

Стало:

```
    {
        question: 'Я готов пойти на риск ради защиты своих убеждений',
        answers: answers,
        archetype: 'Мудрец'
    }

```

### questions.js

Файл с вопросами. Можно удалять, добавлять и менять параметры вопросов. Можно поменять текст вопроса, его ответы и архетип

### Как поменять ответы на вопрос

Если вы хотите поменять общий вид ответов на все вопросы, нужно воспользоваться файлом main_data.js
Но если есть необходимость поменять ответы на конкретный вопрос, нужно сделать это, как в примере ниже

Было:

```
    {
        question: 'Я готов пойти на риск ради защиты своих убеждений',
        answers: answers,
        archetype: 'Мудрец'
    }

```

Стало:

```
    {
        question: 'Я готов пойти на риск ради защиты своих убеждений',
        answers: [{ text: 'Готов', points: 1 },
                        { text: 'Не знаю', points: 0 },
                        { text: 'Не готов', points: -1 }],
        archetype: 'Мудрец'
    }

```

## Автор

Этот проект был создан Никитой Дмитриевым - Москва. Если у вас есть какие-либо вопросы или предложения, пожалуйста, свяжитесь со мной по электронной почте - [nikitadmitrjob@gmail.com](mailto:nikitadmitrjob@gmail.com).