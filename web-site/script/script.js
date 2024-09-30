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
}
    
function showCadastro() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('cadastroForm').style.display = 'block';
}

function resetForm(formId) {
    document.getElementById(formId).reset();
}
