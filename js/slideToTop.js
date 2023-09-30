// scroll to top button
const scrollToTop = function() {
    let top = document.querySelector('#top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            top.classList.add('display');
        } else {
            // 버튼 사라지게
            top.classList.remove('display');
        }
    });

    top.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

window.addEventListener("scroll", scrollToTop);