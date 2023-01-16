import { Component } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>Inline Template</div>`,
  styles: [
    `
      div {
        color: red;
        background-color: yellow;
      }
    `,
  ],
})
export class TestComponent {}
