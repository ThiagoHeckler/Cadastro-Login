document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
});

fetch('../api/dados')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('cadastroForm').style.display = 'none';

    const loginForm = document.getElementById('loginForm');
    const footer = document.getElementById('footer');
    const main = document.getElementById('main');
    
    const extraMargin = 100; // Margem extra em pixels
    const totalHeight = loginForm.scrollHeight + footer.scrollHeight + extraMargin;
    main.style.height = `${totalHeight}px`;
}
    
function showCadastro() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('cadastroForm').style.display = 'block';

    // Ajustar a altura do elemento principal dinamicamente
    const cadastroForm = document.getElementById('cadastroForm');
    const footer = document.getElementById('footer');
    const main = document.getElementById('main');
    
    const extraMargin = 100; // Margem extra em pixels
    const totalHeight = cadastroForm.scrollHeight + footer.scrollHeight + extraMargin;
    main.style.height = `${totalHeight}px`;
}

function resetForm(formId) {
    document.getElementById(formId).reset();
}
