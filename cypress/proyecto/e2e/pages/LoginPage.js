class LoginPage {
    elements = {
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get(':nth-child(2) > input'),
        
    };
    openWebPage(organization) {
        switch(organization) {
            case "Prod":
                cy.visit('https://auth.99minutos.com/');
                break;
            case "Sandbox":
                cy.visit('https://delivery-git-sandbox-99minutos.vercel.app/');
                break;
        }
    }

    login(user, pwd) {
        this.elements.userName().type(`${user}{enter}`);
        this.elements.password().type(`${pwd}{enter}`);
    }
    home(){
        cy.wait(3500);
    }
}
export default new LoginPage();

