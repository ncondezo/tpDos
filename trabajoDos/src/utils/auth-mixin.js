import { Router } from '@vaadin/router';


export const AuthMixin = (Superclass) => class extends Superclass{
    constructor(){
        super();
        this.userAuthenticated = this.checkAuthentication();
    }

    checkAuthentication(){
        const token = localStorage.getItem('authToken');
        console.log(this.userAuthenticated)
        return !!token;
    }

    login(token) {
        localStorage.setItem('authToken', token);
        this.userAuthenticated = true;
        Router.go('/home');
    }

    logout() {
        localStorage.removeItem('authToken');
        this.userAuthenticated = false;
        Router.go('/login');
    }
}