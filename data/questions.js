// Подключение модуля с ответами
const { answers } = require('./main_data');

// Массив с вопросами
const questions = [
    {
        question: 'Я собираю информацию, не делая оценок',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Большие перемены в жизни выбивают меня из колеи',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Восстанавливая свои силы, легче помогать другим',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Я подводил других людей',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Я чувствую себя в безопасности',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'Я отбрасываю страх и делаю то, что нужно сделать',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'Я ставлю нужды других прежде своих собственных',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'Я стараюсь оставаться самим собой в любых обстоятельствах',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'Когда жизнь становиться скучной, я люблю хорошенько встряхнуться',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Я нахожу удовольствие в заботе о других',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'Люди считают меня весёлым',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Я чувствую себя сексуальным',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Я верю, что люди на самом деле не хотят причинять друг другу боль',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'В детстве мной пренебрегали или издевались надо мной',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Мне приятнее дарить подарки, чем получать их',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'Я согласен с утверждением: «лучше любить и потерять, чем вообще никогда не любить»',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Я принимаю жизнь во всей ее полноте',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Я сохраняю чувство перспективы благодаря тому, что просчитываю на много шагов вперёд',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Я творец своей собственной жизни',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'Я уверен, что на все вещи нужно смотреть с разных сторон',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Я перестаю быть таким, каким считал себя раньше',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Жизнь – это череда душевных страданий',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Духовное развитие повышает мою результативность',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Мне легче сделать что-то для других, чем для себя',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'Близкие, дружеские отношения для меня очень важны',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Люди ориентируются на меня',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Я боюсь обладающих властью',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Я не люблю подчиняться общим правилам',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Мне нравится знакомить людей, сводить их друг с другом',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Я чувствую себя отвергнутым',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Бывает, что большие достижения даются мне почти без усилий',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'У меня есть лидерские качества',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Я ищу новые способы саморазвития',
        answers: answers,
        archetype: 'Искатель'
    },
    {
        question: 'Я могу положиться на других в том, чтобы они позаботились обо мне',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'Я предпочитаю брать на себя ответственность',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Я пытаюсь отыскать истину за пеленой иллюзий',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Изменение моих мыслей меняет мою жизнь',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Я нахожу должное применение ресурсам, людским и материальным',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Я готов пойти на риск ради защиты своих убеждений',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'Я не могу сидеть сложа руки и не вмешиваться, когда что-то идет не так',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'Я стремлюсь к объективности',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Мое присутствие зачастую становится толчком к переменам',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Мне нравится смешить людей',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Я достигаю своих целей благодаря дисциплине',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'В целом я люблю людей',
        answers: answers,
        archetype: 'Любовник'
    },
    {
        question: 'Я умею подбирать подходящих людей под определенные задачи',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Для меня жизненно важно сохранять свою независимость',
        answers: answers,
        archetype: 'Искатель'
    },
    {
        question: 'Я верю, что все и всё в мире взаимосвязано',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Мир – это безопасное место',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'Люди, которым я доверял, бросали меня',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Покой не для меня',
        answers: answers,
        archetype: 'Искатель'
    },
    {
        question: 'Я избавляюсь от всего, что перестает мне подходить',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Мне нравится разряжать обстановку, когда кто-то слишком серьёзен',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Небольшой беспорядок полезен для души',
        answers: answers,
        archetype: 'Шут'
    },
    {
        question: 'Самопожертвование ради помощи ближним делает меня лучше',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'Я сохраняю спокойствие',
        answers: answers,
        archetype: 'Мудрец'
    },
    {
        question: 'Я даю отпор грубиянам',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'Я люблю менять ход событий',
        answers: answers,
        archetype: 'Маг'
    },
    {
        question: 'Дисциплина – это ключ к успеху во всех аспектах жизни',
        answers: answers,
        archetype: 'Герой'
    },
    {
        question: 'Мне легко поймать вдохновение',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'Я не оправдываю своих собственных ожиданий',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Я чувствую, что где-то там меня ждет лучший мир',
        answers: answers,
        archetype: 'Искатель'
    },
    {
        question: 'Я полагаю, что люди, которых я встречаю, заслуживают доверия',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'Я претворяю свои мечты в реальность',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'Я знаю, что мои потребности будут обеспечены',
        answers: answers,
        archetype: 'Простодушный'
    },
    {
        question: 'Мне хочется что-нибудь сломать',
        answers: answers,
        archetype: 'Бунтарь'
    },
    {
        question: 'Я стараюсь разрешать ситуации так, чтобы интересы всех были учтены',
        answers: answers,
        archetype: 'Правитель'
    },
    {
        question: 'Мне тяжело говорить «нет»',
        answers: answers,
        archetype: 'Заботливый'
    },
    {
        question: 'У меня гораздо больше идей, чем времени на их осуществление',
        answers: answers,
        archetype: 'Творец'
    },
    {
        question: 'Я ищу, где трава зеленее',
        answers: answers,
        archetype: 'Искатель'
    },
    {
        question: 'Люди, на которых я рассчитываю, подводят меня',
        answers: answers,
        archetype: 'Славный малый'
    },
    {
        question: 'Для меня процесс поиска так же важен, как и результат',
        answers: answers,
        archetype: 'Искатель'
    }
]

// Экспорт
module.exports = {
    questions
};