import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
    static styles = [
        css`
        :host {
            background-color: var(--primary-color);
            color: var(--text-color);
            display: grid;
            grid-template-rows: auto 1fr auto;
            width: 100%;
            min-height: 100vh;
          }
          
          header, footer {
            background-color: var(--secondary-color);
            color: var(--text-muted-color);
            padding: 10px;
            text-align: center;
          }
          
          main {
            background-color: var(--primary-color);
            padding: 16px;
          }
          
        `
    ];

    render() {
        return html`
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
        `;
    }
}
customElements.define('auth-layout', AuthLayout);
