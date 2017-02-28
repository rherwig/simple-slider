/**
 * Moves the active class from `activeSlide` to `nextSlide`.
 */
export default (activeSlide, nextSlide) => {
    activeSlide.classList.toggle('active');
    nextSlide.classList.toggle('active');
};
