import { LitElement, html, css } from 'lit';

class LogoutComponent extends LitElement {
  static styles = css`
        button {
            padding: 8px 12px;
            background-color: var(--accent-color);
            color: var(--button-text-color);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: var(--button-bg-hover);
        }
  
  `;

  render() {
    return html`
      <button @click="${this.handleLogout}">Logout</button>
    `;
  }

  handleLogout() {
    this.dispatchCustomEvent('logout-success')
  }

  dispatchCustomEvent(eventName){
    const event = new CustomEvent(eventName, {
        bubbles: true,
        composed: true
    });

    this.dispatchEvent(event); 
}
}

customElements.define('logout-component', LogoutComponent);

