const hamburger = document.getElementById('navHamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksEl.classList.toggle('open');
});

navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinksEl.classList.remove('open');
    });
});

document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parentLi = btn.closest('.nav-item');
        const isOpen = parentLi.classList.contains('open');
        document.querySelectorAll('.nav-item.open').forEach(li => {
            if (li !== parentLi) {
                li.classList.remove('open');
                li.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
            }
        });
        parentLi.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
        e.stopPropagation();
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.nav-item.open').forEach(li => {
        li.classList.remove('open');
        li.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
});
