console.log('Connecté depuis avancé');

// Créer un template 
const template = document.createElement('template');

template.innerHTML =
    `
        <div>
        <h3>Texte depuis le H3</h3>
        <img />
        </div>
        <div>
            <slot> </slot>
        </div>
        
    `;



class AppCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        // attacher le template
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        //Cibler le template et placer des valeurs
        this.shadowRoot.querySelector('img').src = this.getAttribute('img');

    }
}

// Attribuer un nom de balsie à ce webcomponent
window.customElements.define('app-card', AppCard)