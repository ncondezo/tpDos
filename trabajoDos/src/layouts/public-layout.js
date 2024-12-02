import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--primary-color);
            color: var(--text-color);
            width: 100%;
            height: 100vh;
            padding: 16px;
          }
        `
    ];
    

    render() {
        return html`
            <div>
                <slot></slot>
            </div>`;
    }
}
customElements.define('public-layout', PublicLayout);
