document.addEventListener("DOMContentLoaded", ready);

function ready() {
    window.addEventListener('scroll', function () {
        const el = document.querySelector(".languages-list");
        const elDistance = el.getBoundingClientRect().top;
        if (window.innerHeight > elDistance) {
            document.querySelectorAll('span').forEach(abc => abc.style.animationPlayState = 'running');
        }
    })
    show();
    imageAnimation();
    imageModal();
}

function show() {
    const elements = document.querySelectorAll('.items-list_container');
    elements.forEach(element => element.addEventListener("click", event => {
        if (element.classList.contains('open')) {
            element.classList.remove('open')
        } else {
            element.classList.add('open');
        }
    }))
}

function imageAnimation() {
    const image = document.getElementById('modalImage');
    image.addEventListener('mouseenter', event => {
        image.style.animationPlayState = 'running';
    })

    image.addEventListener('mouseout', event => {
        image.style.animationPlayState = 'paused';
    })
}

function imageModal() {
    const imageMod = document.getElementById('modalImage');
    const modal = document.querySelector('.modal-window');

    imageMod.addEventListener('click', touch => {
        modal.style.display = 'block';
    })

    modal.addEventListener('click', hideModal => {
        modal.style.display = 'none';
    })
}




