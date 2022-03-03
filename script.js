const portfolio = {}

portfolio.init = () => {
    portfolio.navScroll();
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