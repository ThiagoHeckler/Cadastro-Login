document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada!');
});

fetch('../api/dados')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });