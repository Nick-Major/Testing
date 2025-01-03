import { isValid } from "../validator/validator";

export default class Widget {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.onSubmit = this.onSubmit.bind(this);
    }

    static get markup() {
        return `
        <form class="card-widget">
        <ul class="card-list">
            <li class="card visa"></li>
            <li class="card mastercard"></li>
            <li class="card americanExpress"></li>
            <li class="card discover"></li>
            <li class="card jcb"></li>
            <li class="card dinersClub"></li>
            <li class="card mir"></li>
        </ul>
        <div class="check-field">
            <input class="input" type="text" placeholder="Введите реквизиты карты">
            <button class="btn" type="button">Click to Validate</button>
        </div>
    </form>
        `
    }

    static get buttonSelector() {
        return '.btn';
    }

    static get inputSelector() {
        return '.input';
    }

    static get selector() {
        return '.card-widget';
    }

    bindToDOM() {
        this.parentEl.innerHTML = Widget.markup;

        this.element = this.parentEl.querySelector(Widget.selector);
        this.submit = this.element.querySelector(Widget.buttonSelector);
        this.input = this.element.querySelector(Widget.inputSelector);

        this.element.addEventListener('submit', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;

        if(isValid(value)) {
            this.input.classList.add('valid');
            this.input.classList.remove('invalid');
        } else {
            this.input.classList.add('invalid');
            this.input.classList.remove('valid');
        }
    }
}