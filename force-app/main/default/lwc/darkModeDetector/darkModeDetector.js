import { LightningElement } from 'lwc';

let WHITE = 'rgb(255, 255, 255)';

export default class DarkModeDetector extends LightningElement {
  color = WHITE;

  renderedCallback() {
    let el = this.template.querySelector('.detector');

    // eslint-disable-next-line @lwc/lwc/no-async-operation
    window.setInterval(() => {
      let newColor = window.getComputedStyle(el)['background-color'];

      if (newColor !== this.color) {
        this.color = newColor;
        this.dispatchEvent(
          new CustomEvent('modechange', {
            detail: { darkMode: this.color !== WHITE },
          })
        );
      }
    }, 1000);
  }
}
