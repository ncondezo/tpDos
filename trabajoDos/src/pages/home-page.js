import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../utils/auth-mixin.js'
import '../components/login-component.js'
import '../components/logout-component.js'
import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import '../layouts/auth-layout.js'

export class HomePage extends AuthMixin(LitElement) {
    static styles = [
        css`
            :host {
                width: 100%;
                --dile-nav-background-color: var(--primary-color, orange);
            }

            h1,h2, p{
                color: #0009
            }
            .menu1-content{
                background-color: grey;
            }

            .menu{
                background-color: grey;
            }

            dile-nav {
                background-color: var(--secondary-color);
                color: var(--text-color);
              }
              
              dile-menu-hamburger {
                background-color: var(--primary-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
              }
              
              .menu1-content {
                background-color: var(--secondary-color);
                padding: 16px;
                border-radius: 8px;
              }
              
            

        `
    ];

    handleLogout(){
        this.logout();
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('logout-success', this.handleLogout.bind(this));
    }

    disconnectedCallback(){
        super.disconnectedCallback();
        this.removeEventListener('logout-success', this.handleLogout.bind(this));
    }


    render() {
        return html`
        <auth-layout>
            <dile-nav slot="header" menu="right">
                <h2 slot="title">Home Page</h2>
                <dile-menu-hamburger id="menu" slot="menu">
                <div class="menu1-content" slot="menu">
                    <h2>Menu</h2>
                    <logout-component></logout-component>
                </div>
                </dile-menu-hamburger>
            </dile-nav>
            <p slot="footer">Trabajo práctico</p>
        
        </auth-layout>
        `;

    }
}
customElements.define('home-page', HomePage);
