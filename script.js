function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';
    }
}

function updateCartCount(count) {
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
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

    updateCartCount(1);
});

function finalizarCompra(event) {
    event.preventDefault();
    const total = document.querySelector('.total-price').textContent;
    alert(`Compra concluída! Total: ${total}\nObrigado por sua preferência.`);
}

function addToCart(productName, price) {
    alert(`${productName} adicionado ao carrinho!\nPreço: R$ ${price.toFixed(2)}`);
    updateCartCount(1);
}
