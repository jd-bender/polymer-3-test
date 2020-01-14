import { PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import '../@polymer/paper-input/paper-input.js';
import { html } from '../@polymer/polymer/lib/utils/html-tag.js';
class TestElement extends PolymerElement {
  static get template() {
    return html`
        <paper-input value="tester"></paper-input>
`;
  }

  static get is() { return "test-element"; }
  constructor() {
      super();
  }
}
// Register the new element with the browser
customElements.define(TestElement.is, TestElement);
