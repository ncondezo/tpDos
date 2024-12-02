import { LitElement, html, css, nothing } from 'lit';
import { AuthMixin } from '../utils/auth-mixin.js'
import '../components/login-component.js';
import '../components/alert-component.js';
import '../layouts/public-layout.js'


export class LoginPage extends AuthMixin(LitElement) {

    constructor(){
        super();
        this.alertType='';
        this.alertMessage=''
    }

    static get properties() {
        return {
            alertType: { type: String },
            alertMessage: { type: String },
        };
    }

    handleLoginSuccess(event){
        const { email } = event.detail;
        this.alertType = 'success';
        this.alertMessage = `login successful for ${email}`
        const token = 'jwt-token'
        this.login(token)
        //Router.go('/home');
    }

    handleLoginError(event){
        const { error } = event.detail;
        this.alertType = 'error';
        this.alertMessage = `User or password incorrect, please try again ${error || ""}`;

        setTimeout(() => {
            this.alertType = '';
            this.alertMessage = '';
            this.requestUpdate(); 
        }, 3000);  
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
        this.addEventListener('login-error', this.handleLoginError.bind(this));
    }

    disconnectedCallback(){
        super.disconnectedCallback();
        this.removeEventListener('login-success', this.handleLoginSuccess.bind(this));
        this.removeEventListener('login-error', this.handleLoginError.bind(this));
    }

    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
        `
    ];

    render() {
        return html`
        <public-layout>
        <login-component></login-component>
        ${this.alertType 
            ? html`<alert-component .type=${this.alertType} .message=${this.alertMessage}></alert-component>` 
            : nothing }
            </public-layout>
        `;
    }
}
customElements.define('login-page', LoginPage);
