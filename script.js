// Aguarda o documento HTML ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário
    const form = document.querySelector('.form');

    // Adiciona um 'ouvinte de evento' para o envio do formulário
    form.addEventListener('submit', (event) => {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém todos os campos de entrada dentro do formulário
        const inputs = form.querySelectorAll('input');

        // Itera sobre cada campo de entrada para fazer a validação
        inputs.forEach(input => {
            const inputValue = input.value.trim();
            const inputName = input.name;
            const parentElement = input.parentElement;
            const errorMessage = parentElement.querySelector('.error-msg');

            // Remove a classe de erro de qualquer campo no início da validação
            parentElement.classList.remove('error');
            
            // 1. Verifica se o campo está vazio
            if (inputValue === '') {
                // Adiciona a classe de erro se o campo estiver vazio
                parentElement.classList.add('error');
                // Altera a mensagem de erro específica para campos vazios
                errorMessage.textContent = `${inputName.charAt(0).toUpperCase() + inputName.slice(1)} não pode estar vazio`;
                
                // Limpa o valor do input
                inputs.value = '';

            } else if (inputName === 'email') {
                // 2. Validação específica para o campo de e-mail
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(inputValue)) {
                    // Adiciona a classe de erro se o e-mail for inválido
                    parentElement.classList.add('error');
                    // Altera a mensagem de erro específica para o e-mail
                    errorMessage.textContent = 'Parece que este não é um email';
                    
                    // Limpa o valor do input
                    input.value = '';
                }
            }
        });
    });
});