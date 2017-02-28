/**
 * Navigates to a specific slide index, either with or without animating.
 *
 * @slides Nodelist of slides
 * @slideIndex Index of the slide to go to
 * @animate Determines if the animation should play. Defaults to true.
 *
 * @returns {Promise}
 */
export default async (slides, slideIndex, animate = true) => new Promise(resolve => {
    if (!animate) {
        slides.classList.remove('animate');
    }

    slides.setAttribute('style', `transform: translateX(-${slideIndex * 100}%);`);

    requestAnimationFrame(() => {
        if (!animate) {
            slides.classList.add('animate');
        }

        return resolve();
    });
});