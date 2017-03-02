import toggleSlide from '../utils/toggleSlide';

export default class Slider {

    ref = null;
    slides = null;

    options = {
        cycle: false
    };

    constructor($slider, options) {
        this.ref = $slider;
        this.slides = this.ref.querySelector('.slides');

        this.options = {
            ...this.options,
            ...options
        };

        this.ref.querySelector('.prev-arrow').addEventListener('click', this.previous.bind(this));
        this.ref.querySelector('.next-arrow').addEventListener('click', this.next.bind(this));
    }

    async next() {
        const $activeSlide = this.slides.querySelector('.active');
        let $nextSlide = $activeSlide.nextElementSibling;

        if (!$nextSlide) {
            if (!this.options.cycle) {
                return;
            }

            this.slides.appendChild(this.slides.firstElementChild);
            await this.slideTo(this.slides.children.length - 2, false);
            $nextSlide = this.slides.lastElementChild;
        }

        const slidesArray = Array.from(this.slides.children);
        const nextSlideIndex = slidesArray.indexOf($nextSlide);
        const activeSlideIndex = slidesArray.indexOf($activeSlide);

        toggleSlide($activeSlide, $nextSlide);

        this.ref.dispatchEvent(new CustomEvent('next', {
            detail: {
                fromSlide: activeSlideIndex,
                toSlide: nextSlideIndex
            }
        }));

        return this.slideTo(nextSlideIndex);
    }

    async previous() {
        const $activeSlide = this.slides.querySelector('.active');
        let $nextSlide = $activeSlide.previousElementSibling;

        if (!$nextSlide) {
            if (!this.options.cycle) {
                return;
            }

            this.slides.insertBefore(this.slides.lastElementChild, this.slides.firstElementChild);
            await this.slideTo(1, false);
            $nextSlide = this.slides.firstElementChild;
        }

        const slidesArray = Array.from(this.slides.children);
        const nextSlideIndex = slidesArray.indexOf($nextSlide);
        const activeSlideIndex = slidesArray.indexOf($activeSlide);

        toggleSlide($activeSlide, $nextSlide);

        this.ref.dispatchEvent(new CustomEvent('previous', {
            detail: {
                fromSlide: activeSlideIndex,
                toSlide: nextSlideIndex
            }
        }));

        return this.slideTo(nextSlideIndex);
    }

    slideTo = (index, animate = true) => new Promise(resolve => {
        if (!animate) {
            this.slides.classList.remove('animate');
        }

        this.slides.setAttribute('style', `transform: translateX(-${index * 100}%);`);

        requestAnimationFrame(() => {
            if (!animate) {
                this.slides.classList.add('animate');
            }

            return resolve();
        });
    });

    addEventListener(event, callback) {
        this.ref.addEventListener(event, callback);
    }

}