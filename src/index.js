import './styles/main.scss';

import Slider from './core/slider';

async function init($slider, options = {}) {
    return new Slider($slider, options);
}

async function initAll(options = {}) {
    Array.from(document.querySelectorAll('.slider')).forEach(slider => {
        new Slider(slider, options);
    });
}

global.SimpleSlider = Slider;