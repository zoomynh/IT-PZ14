document.addEventListener('DOMContentLoaded', () => {
    // 1. Отримати всі кнопки питань у FAQ-блоці
    const faqQuestions = document.querySelectorAll('.faq-question');

    // 2. Пройтися по кожному питанню і додати обробник подій
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Отримати відповідний блок відповіді
            // Елемент відповіді знаходиться одразу за кнопкою питання в структурі HTML
            const answer = question.nextElementSibling;

            // Перевірка, чи відповідь вже активна (відкрита)
            const isActive = answer.classList.contains('active');

            // 3. Закрити всі інші відповіді перед відкриттям поточної
            // Це забезпечує, що одночасно відкрита лише одна відповідь (акордеон)
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
                item.style.maxHeight = '0';
                item.style.padding = '0 15px'; // Відновити початковий відступ
            });

            // 4. Якщо відповідь не була активна, відкрити її
            if (!isActive) {
                // Додати клас 'active', який встановлює max-height та padding у CSS
                answer.classList.add('active');
                // Встановлення max-height на основі фактичної висоти контенту
                // Це краще для плавного розкриття, але простіше встановити велике значення для переходу:
                answer.style.maxHeight = answer.scrollHeight + 30 + 'px'; // scrollHeight + невеликий запас
                answer.style.padding = '15px';
            }
        });
    });
});