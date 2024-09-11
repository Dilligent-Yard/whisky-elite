const productDetails = {
    'hibiki-harmony': {
        name: 'Hibiki Harmony',
        image: 'https://primoliquorsweston.com/cdn/shop/products/zb7lc8g2kbzbru8ftwxw.png?v=1701791592',
        description: 'Um uísque japonês excepcional, conhecido por sua harmonia e complexidade.',
        details: [
            'Blend de maltes e grãos das destilarias Yamazaki, Hakushu e Chita',
            'Notas de mel, laranja confitada e carvalho branco',
            'Finalização longa e suave com um toque de mizunara (carvalho japonês)',
            'Teor alcoólico: 43%'
        ],
        price: 'R$ 9.000,00'
    },
    'white-horse': {
        name: 'White Horse 1 Litro',
        image: 'https://diageo.vtexassets.com/assets/vtex.file-manager-graphql/images/c63b3b63-8996-4ac8-87a9-41454a8e3135___e305731a3a180dd638417f208b163f95.png',
        description: 'Um blend escocês suave e equilibrado, perfeito para diversas ocasiões.',
        details: [
            'Blend de uísques de malte e grão',
            'Notas de cereais, fumaça suave e toque de mel',
            'Sabor equilibrado com um final levemente defumado',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 90,00'
    },
    'buchanans-deluxe': {
        name: 'Buchanan\'s Deluxe 12 anos 750ml',
        image: 'https://cdn.awsli.com.br/2500x2500/2649/2649600/produto/234522006/buchanan-s-deluxe-aged-12-years---0-75l-x-12---sc-qopwbqo073.png',
        description: 'Um blend escocês premium, envelhecido por 12 anos, com sabor suave e refinado.',
        details: [
            'Blend de uísques de malte e grão envelhecidos por no mínimo 12 anos',
            'Notas de frutas cítricas, chocolate e mel',
            'Sabor suave e cremoso com um final longo e caloroso',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 165,00'
    },
    'bourbon-buffalo-trace': {
        name: 'Bourbon Buffalo Trace 750 ml',
        image: 'https://www.emporiofreicaneca.com.br/wp-content/uploads/2020/07/Whiskey-Bourbon-Buffalo-Trace-Kentucky-750ml.png',
        description: 'Um bourbon premium de Kentucky, com notas de baunilha, caramelo e carvalho.',
        details: [
            'Envelhecido em barris de carvalho americano novo',
            'Notas de baunilha, caramelo, maçã e especiarias',
            'Sabor rico e complexo com um final longo e suave',
            'Teor alcoólico: 45%'
        ],
        price: 'R$ 180,00'
    },
    'whisky-passport': {
        name: 'Whisky Passport 1 litro',
        image: 'https://www.emporiofreicaneca.com.br/wp-content/uploads/2020/05/Whisky-Passport-1L.png',
        description: 'Um blend escocês suave e acessível, ideal para drinks e coquetéis.',
        details: [
            'Blend de uísques de malte e grão',
            'Notas de cereais, frutas e um toque de fumaça',
            'Sabor leve e fácil de beber, ideal para misturas',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 70,00'
    },
    'johnnie-walker-blue-label': {
        name: 'Johnnie Walker Blue Label 200 ml',
        image: 'https://daruadda.com/wp-content/uploads/2020/12/jonnie-walker2.png',
        description: 'Um blend de luxo, raro e excepcional, com sabores complexos e refinados.',
        details: [
            'Blend de uísques raros e excepcionais',
            'Notas de mel, frutas secas, especiarias e fumaça',
            'Sabor rico e sedoso com um final longo e caloroso',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 650,00'
    },
    'royal-salute-the-malts-blend': {
        name: 'Royal Salute The Malts Blend 21 Years',
        image: 'https://www.emporiofreicaneca.com.br/wp-content/uploads/2019/12/Whisky-Royal-Salute-The-Malts-Blend-21-anos-700-ml.png',
        description: 'Um blend luxuoso de maltes envelhecidos por no mínimo 21 anos.',
        details: [
            'Blend de uísques de malte envelhecidos por no mínimo 21 anos',
            'Notas de frutas maduras, mel, especiarias e carvalho',
            'Sabor rico e complexo com um final longo e elegante',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 1.500,00'
    },
    'polo-estancia-royal-salute': {
        name: 'Polo Estancia Royal Salute',
        image: 'https://www.emporiofreicaneca.com.br/wp-content/uploads/2021/11/kit-paulistania-degustacao-3.png',
        description: 'Uma edição especial do Royal Salute, inspirada no esporte do polo.',
        details: [
            'Blend de uísques de malte e grão envelhecidos',
            'Notas de pêra, laranja, baunilha e chocolate',
            'Sabor suave e cremoso com um final longo e frutado',
            'Teor alcoólico: 40%'
        ],
        price: 'R$ 1.500,00'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-details-modal');
    const closeModal = document.getElementById('close-modal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product');
            const product = productDetails[productId];

            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-image').src = product.image;
            document.getElementById('modal-image').alt = product.name;
            document.getElementById('modal-description').textContent = product.description;
            
            const detailsList = document.getElementById('modal-details');
            detailsList.innerHTML = '';
            product.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsList.appendChild(li);
            });

            document.getElementById('modal-price').textContent = product.price;

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
});
