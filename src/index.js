import './styles/main.scss';

import { setOptions } from './core/options';
import previousSlide from './core/previousSlide';
import nextSlide from './core/nextSlide';

async function init(options = {}) {
    setOptions(options);

    Array.from(document.querySelectorAll('.slider')).forEach((slider) => {
        slider.querySelector('.prev-arrow').addEventListener('click', previousSlide.bind(slider.querySelector('.slides')));
        slider.querySelector('.next-arrow').addEventListener('click', nextSlide.bind(slider.querySelector('.slides')));
    });
}

init({
    cycle: true
});