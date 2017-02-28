import {getOption} from './options';
import gotoSlide from '../utils/gotoSlide';
import toggleSlide from '../utils/toggleSlide';

/**
 * Navigates to the previous slide.
 *
 * @returns {Promise}
 */
export default async function previousSlide() {
    const $activeSlide = this.querySelector('.active');
    let $nextSlide = $activeSlide.previousElementSibling;

    if (!$nextSlide) {
        if (!getOption('cycle')) {
            return;
        }

        this.insertBefore(this.lastElementChild, this.firstElementChild);
        await gotoSlide(this, 1, false);
        $nextSlide = this.firstElementChild;
    }

    const nextSlideIndex = Array.from(this.children).indexOf($nextSlide);

    toggleSlide($activeSlide, $nextSlide);
    return gotoSlide(this, nextSlideIndex);
}