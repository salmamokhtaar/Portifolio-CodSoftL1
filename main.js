
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.header ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    });
