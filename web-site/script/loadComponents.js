// script/loadComponents.js

function loadComponent(componentId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o componente:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', '/xampp/Cadastro-Login/web-site/layout/header.html');
    loadComponent('nav', '/xampp/Cadastro-Login/web-site/layout/nav.html');
    loadComponent('footer', '/xampp/Cadastro-Login/web-site/layout/footer.html');
});