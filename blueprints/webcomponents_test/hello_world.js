// web component
class HelloWorld extends HTMLElement {
  
  constructor() {
    super();
    this.name = 'World';
    this.namegerman = "Welt";
  }
  
  // component attributes
  static get observedAttributes() {
    return ['name', 'namegerman'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
  
  // connect component
  connectedCallback() {
    this.textContent = `Hello ${ this.name }! Hallo ${ this.namegerman }!`;
  }
  
}

// register component
customElements.define( 'hello-world', HelloWorld );