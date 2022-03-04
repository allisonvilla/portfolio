const portfolio = {}

portfolio.init = () => {
    portfolio.navScroll();
    portfolio.checkboxEvent(); 
}

// Project data array
portfolio.projects = [
    {
        name: 'Self-Care Timer',
        desc: 'A productivity timer that returns a random self-care suggestion at the end of your work period. Built with vanilla JavaScript.',
        liveurl: 'https://allisonvilla.github.io/self-care-timer/',
        giturl: 'https://github.com/allisonvilla/self-care-timer',
        img: './assets/timer-app-preview.png',
        tools: [
            'js',
            'html',
            'css',
            'git',
            'terminal',
            'responsive',
            'accessibility',
            'featured'
        ],
    },
    {
        name: 'Random Zoo Animal',
        desc: `An app that returns a random zoo animal based on user's choice of animal type. Built with vanilla JavaScript and a zoo animal REST API.`,
        liveurl: 'https://allisonvilla.github.io/random-zoo-animal/',
        giturl: 'https://github.com/allisonvilla/random-zoo-animal',
        img: './assets/zoo-app-preview.png',
        tools: [
            'js',
            'html',
            'css',
            'git',
            'terminal',
            'responsive',
            'accessibility',
            'rest',
            'featured'
        ],
    },
    {
        name: 'Ghibli Movie Night',
        desc: `A paired programming project, inspired by our love for Studio Ghibli. Ghibli Movie Night is a quiz game where the user must select the correct movie title based on a randomly presented movie description. Built with vanilla JavaScript and a Studio Ghibli REST API.`,
        liveurl: 'https://musing-leakey-6cb38d.netlify.app/',
        giturl: 'https://github.com/allisonvilla/ghibli-movie-night',
        img: './assets/ghibli-app-preview.png',
        tools: [
            'js',
            'html',
            'css',
            'sass',
            'git',
            'terminal',
            'responsive',
            'rest',
            'featured'
        ],
    },
    {
        name: 'Almost Blackjack',
        desc: `A simple blackjack-like game with a betting system. Built with vanilla JavaScript.`,
        liveurl: 'https://allisonvilla.github.io/blackjack-game/',
        giturl: 'https://github.com/allisonvilla/blackjack-game',
        img: './assets/blackjack-app-preview.png',
        tools: [
            'js',
            'html',
            'css',
            'git',
            'terminal',
            'responsive',
            'accessibility',
            'featured'
        ]
    },
    {
        name: `Harper's Blog`, 
        desc: `A fully responsive multi-page design conversion built with SCSS and a touch of vanilla JavaScript for small interactive features.`,
        liveurl: 'https://zealous-payne-b74657.netlify.app/index.html', 
        giturl: 'https://github.com/allisonvilla/juno-project-one',
        img: './assets/harper-blog-preview.png', 
        tools: [
            'js',
            'html',
            'css',
            'sass',
            'git',
            'terminal',
            'responsive'
        ]
    }, 
];

portfolio.checkboxEvent = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedValues = []; 

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    checkedValues.push(checkbox.value);
                }
            }); 
        }); 
    }); 
    return checkedValues; 
}

// Apply CSS class to nav bar after specified amount of scrolling
portfolio.navScroll = () => {
    const navEl = document.querySelector('.main-nav');
    window.onscroll = () => {
        if (window.pageYOffset > 77) {
            navEl.classList.add('scrolled');
        } else {
            navEl.classList.remove('scrolled');
        }
    }
}

portfolio.init();