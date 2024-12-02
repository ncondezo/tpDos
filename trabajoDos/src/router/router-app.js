import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';


export class RouterApp extends LitElement {
    firstUpdated(){
        const router = new Router(this.shadowRoot.querySelector('#outlet'));

        // const outlet = this.shadowRoot.querySelector('#outlet');
        // const router = new Router(outlet);

        const isAuthenticated = () => {
            const token = localStorage.getItem('authToken');
            return !!token;
        };
        
        router.setRoutes([
            {
                path: '/login',
                component: 'login-page',
            },
            {
                path: '/home',
                component: 'home-page',
                action: async (context, commands) => {
                    if (!isAuthenticated()) {
                        return commands.redirect('/login');
                    }
                },
            },
            {
                path: '(.*)',
                redirect: '/login',
            },
        ]);
        //     { path: '/home', component: 'home-page' },
        //     { path: '/login', component: 'login-page' },
        // ]);
    }

    static styles = [
        css`
            :host {
                width: 100%;
                height: 100vh; 
                overflow: hidden; 
            }
        `
    ];

    render() {
        return html`
            <div id="outlet"></div>
         `;
    }
}
customElements.define('router-app', RouterApp);
