document.addEventListener('DOMContentLoaded', function () {
    const helpButton = document.querySelector('.help-button');
    const chatbotPanel = document.querySelector('.chatbot-panel');
    const closeButton = document.querySelector('.close-button');
    const video = document.querySelector('.recipe-slider video');
    const paginationDots = document.querySelectorAll('.slider-pagination .page');
    const steps = document.querySelectorAll('.step');
    const finishButton = document.querySelector('.finish-button');

    const stepData = [
        {
            videoSrc: 'images/page recette/étape1.mp4',
            title: 'Étape 1',
            description: 'Hachez l\'ail, l\'oignon, puis coupez la carotte et le céleri en petits dés (enlevez les principales nervures du céleri).',
            ingredients: [
                { src: 'images/page recette/ail.svg', alt: 'Ail' },
                { src: 'images/page recette/oignon.svg', alt: 'Oignon' },
                { src: 'images/page recette/carottes.svg', alt: 'Carotte' },
                { src: 'images/page recette/celeri.svg', alt: 'Céleri' },
            ]
        },
        {
            videoSrc: 'images/page recette/étape2.mp4',
            title: 'Étape 2',
            description: 'Faites chauffer l\'huile dans une casserole assez grande. Faites revenir l\'ail, l\'oignon, la carotte et le céleri à feu doux pendant 5 min en remuant.',
            ingredients: [
                { src: 'images/page recette/ail.svg', alt: 'Ail' },
                { src: 'images/page recette/oignon.svg', alt: 'Oignon' },
                { src: 'images/page recette/carottes.svg', alt: 'Carotte' },
                { src: 'images/page recette/celeri.svg', alt: 'Céleri' },
            ]
        },
        {
            videoSrc: 'images/page recette/étape3.mp4',
            title: 'Étape 3',
            description: 'Augmentez la flamme, puis ajoutez le boeuf. Faites brunir et remuez de façon à ce que la viande ne fasse pas de gros paquets.',
            ingredients: [
                { src: 'images/page recette/viande.svg', alt: 'Viande' }
            ]
        },
        {
            videoSrc: 'images/page recette/étape4.mp4',
            title: 'Étape 4',
            description: 'Ajoutez le bouillon, le vin rouge, les tomates préalablement coupées assez grossièrement. Portez à ébullition.',
            ingredients: [
                { src: 'images/page recette/vin.svg', alt: 'Vin' }
            ]
        },
        {
            videoSrc: 'images/page recette/étape5.mp4',
            title: 'Étape 5',
            description: 'Baissez ensuite le feu et laissez mijoter à couvert 1h à 1h30, de façon à ce que le vin s\'évapore.',
            ingredients: []
        },
        {
            videoSrc: 'images/page recette/étape6.mp4',
            title: 'Étape 6',
            description: 'Faites cuire les spaghetti, puis mettez-les dans un plat.',
            ingredients: [
                { src: 'images/page recette/tagliatelles.svg', alt: 'Tagliatelles' }
            ]
        },
        {
            videoSrc: 'images/page recette/étape7.mp4',
            title: 'Étape 7',
            description: 'Ajoutez la sauce bolognaise.',
            ingredients: []
        }
    ];

    function updateContent(index) {
        const step = stepData[index];
        video.src = step.videoSrc;

        steps.forEach(step => step.classList.remove('active'));
        steps[index].classList.add('active');

        const ingredientsContainer = steps[index].querySelector('.ingredients');
        ingredientsContainer.innerHTML = '';
        step.ingredients.forEach(ingredient => {
            const img = document.createElement('img');
            img.src = ingredient.src;
            img.alt = ingredient.alt;
            ingredientsContainer.appendChild(img);
        });

        if (index === 6) {
            finishButton.classList.add('active');
        } else {
            finishButton.classList.remove('active');
        }
    }

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            paginationDots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
            updateContent(index);
        });
    });

    helpButton.addEventListener('click', () => {
        chatbotPanel.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
        chatbotPanel.classList.remove('open');
    });

    // Initialiser la première étape
    updateContent(0);
});
