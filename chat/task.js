document.querySelector('.chat-widget__side').onclick = () => {
    document.querySelector('.chat-widget').classList.toggle('chat-widget_active')
}
rudeAnswerOptions = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Кто тут?',
    'Добрый день, до свидания!',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!',
    'К сожалению все операторы заняты, не пишите нам больше',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Наш специалист ответит вам через 125 лет 53 дня 21 час 53 минуты и 40 секунд',
    'Чего докопались?'
]

function rudeAnswer (messages, date) {
    messages.innerHTML += `<div class="message">
    <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
    <div class="message__text">${rudeAnswerOptions[Math.round((Math.random()*9))]}</div>                
    </div>`;
}

input = document.querySelector('input')
input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && input.value) {
        const messages = document.querySelector( '.chat-widget__messages' );
        let now = new Date()
        messages.innerHTML += `<div class="message message_client">
            <div class="message__time">${now.getHours()}:${now.getMinutes()}</div>
            <div class="message__text">${input.value}</div>                
        </div>`;
        input.value = ''
        setTimeout(rudeAnswer, 1500, messages ,now)
        
    }
    

    
})
    