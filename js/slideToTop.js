// scroll to top button
var scrollToTop = function() {
    let top = document.querySelector('#top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            top.classList.add('active');
        } else {
            // 버튼 사라지게
            top.classList.remove('active');
        }
    });

    top.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};