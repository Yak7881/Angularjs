console.log("Connecté");

// Créer un composant
// PascalCase vs camelCase

class DemoCard extends HTMLElement{
    constructor(){
        // récupère le constrcteur de HTMLElement
        super();

        this.innerHTML = 'Nouveau Composant';
    }
}

customElements.define('app-demo', DemoCard)