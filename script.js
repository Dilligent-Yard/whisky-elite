function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', finalizarCompra);
    }
});

function finalizarCompra(event) {
    event.preventDefault();
    const total = document.querySelector('#cart-item .text-lg.font-semibold').textContent;
    alert(`Compra concluída! Total: ${total}\nObrigado por sua preferência.`);
}
