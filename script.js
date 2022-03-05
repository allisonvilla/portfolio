const portfolio = {}

portfolio.init = () => {
    portfolio.navScroll();
    portfolio.checkboxEvent(); 
}

// Project data array
portfolio.projects = [
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
            'featured',
        ],
    },
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
            'featured',
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
            'featured',
        ],
    },
    {
        name: 'Almost Blackjack',
        desc: `My first full JS app! Almost Blackjack is a simple blackjack-like game with a betting system, built with vanilla JavaScript.`,
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
            'featured',
        ],
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
            'accessibility',
            'responsive',
        ],
    },
];

portfolio.checkboxes = document.querySelectorAll('input[type="checkbox"]'); 

portfolio.checkboxEvent = () => {
    portfolio.checkboxes.forEach((checkbox) => {
        // Ensure that checkboxes are unchecked on page load
        checkbox.checked = false; 
        // When user input is detected, run projectFilter()
        checkbox.addEventListener('change', () => {
            portfolio.projectFilter(); 
        }); 
    }); 
}

// A function that returns the value of the user's selected checkboxes
portfolio.getCheckedValues = () => {
    let checkedValues = []; 
    portfolio.checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    }); 
    return checkedValues; 
}

portfolio.projectFilter = () => {
    const projectDisplay = document.querySelector('.project-display');
    const comingSoon = document.querySelector('.coming-soon'); 
    projectDisplay.innerHTML = '';

    // An array to hold the objects that are to be rendered to the DOM
    let displayArray = [];

    // Run getCheckedValues() and store its return in a variable
    let checkedValues = portfolio.getCheckedValues();

    // A function that will check if the tools property on a project object contains every value that was selected by the user - returns a boolean value
    let matchChecker = (originalArray, checkedArray) => checkedArray.every((x) => originalArray.includes(x));

    // Loop through the projects array
    portfolio.projects.forEach((project) => {
        let tools = project.tools;

        // Check if each project matches the filter, using matchChecker()
        let isMatch = matchChecker(tools, checkedValues);

        // If the project matches the filter, push to the display array
        if (isMatch) {
            displayArray.push(project); 
        } 

        // If the display array is empty, show a different message - otherwise, render the projects on the DOM
        if (displayArray.length == 0) {
            comingSoon.style.display = 'block'; 
        } else {
            let projectDiv = `
                <div class="project-container">
                    <div class="project-img">
                        <img src="${project.img}" alt="A screenshot of ${project.name}">
                    </div>
                    <div class="project-text">
                        <h3>${project.name}</h3>
                        <p>${project.desc}</p>
                        <p class="links"><a class="live-link" href="${project.liveurl}" target="_blank" rel="noopener noreferrer">Live Link</a> | <a class="github-link" href="${project.giturl}" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
                    </div>
                </div>`;
            projectDisplay.innerHTML += projectDiv;
            comingSoon.style.display = 'none'; 
        }
    });

    // Hide display if nothing is checked
    if (checkedValues.length == 0) {
        projectDisplay.innerHTML = ``;
    }
}

// Apply CSS class to nav bar after specified amount of scrolling
portfolio.navScroll = () => {
    const nav = document.querySelector('.main-nav');
    window.onscroll = () => {
        if (window.pageYOffset > 77) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

portfolio.init();