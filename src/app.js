import Widget from "./widget/widget";

const container = document.querySelector('.container');
const form = new Widget(container);

form.bindToDOM();