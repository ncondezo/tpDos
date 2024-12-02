import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {

    constructor(){
        super();
        this.initProps();
    }

    static get properties(){
        return {
            email: {type: String},
            password: {type: String}
        }
    }

    static styles = [
        css`
        form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 400px;
            max-width: 100%;
            padding: 16px;
            background-color: var(--secondary-color);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          }
          
          input {
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background-color: var(--primary-color);
            color: var(--text-color);
          }
          
          button {
            padding: 10px;
            background-color: var(--button-bg);
            color: var(--button-text-color);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          
          button:hover {
            background-color: var(--button-bg-hover);
          }
          
        `
    ];
    

    handleSubmit(event){
        event.preventDefault();
        if (this.email === 'admin@admin.com' && this.password === 'admin'){
            this.dispatchCustomEvent('login-success', {email: this.email, password: this.password});
        }else{
            this.dispatchCustomEvent('login-error', {email: this.email, password: this.password});
        }
        this.initProps();
    }

    initProps(){
        this.email = '';
        this.password = '';
    }

    dispatchCustomEvent(eventName, detail){
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event); 
    }

    handleInput(event){
        const { name, value } = event.target;
        this[name] = event.target.value;
         
    }

    render() {
        return html`
        <form @submit=${this.handleSubmit}>
            <label for="email">Email:</label>
            <input type="email" required id="email" name="email" .value=${this.email} @input=${this.handleInput}/> 

            <label for="password">Password:</label>
            <input type="password" required id="password" name="password" .value=${this.password} @input=${this.handleInput}/> 

            <button type="submit">Login</button>

        </form>
        `;

        
    }
}
customElements.define('login-component', LoginComponent);

