import { getOption } from '../core/options';
import toggleSlide from '../utils/toggleSlide';
import gotoSlide from '../utils/gotoSlide';

/**
 * Navigates to the next slide.
 *
 * @returns {Promise}
 */
export default async function nextSlide() {
    const $activeSlide = this.querySelector('.active');
    let $nextSlide = $activeSlide.nextElementSibling;

    if (!$nextSlide) {
        if (!getOption('cycle')) {
            return;
        }

        this.appendChild(this.firstElementChild);
        await gotoSlide(this, this.children.length - 2, false);
        $nextSlide = this.lastElementChild;
    }

    const nextSlideIndex = Array.from(this.children).indexOf($nextSlide);

    toggleSlide($activeSlide, $nextSlide);
    return gotoSlide(this, nextSlideIndex);
}