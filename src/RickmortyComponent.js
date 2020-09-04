import { html, css, LitElement } from 'lit-element';

export class RickmortyComponent extends LitElement {
    static get styles() {
        return css `
          :host {
            display: flex;
            align-items: center;
            flex:direction: column;
            background: black;
          }
          div {
            background: red;
            padding: 10px;
            border: 10px solid blue;
            border-radius: 30px;
          }
          p {
            text-align: center;
            color: white;
            font-family: cursive;
            font-weight: bold;
          }
        `;
    }
    static get properties() {
        return {
            id: { type: String },
            nombre: { type: String },
            img: { type: String }
        };
    }
    constructor() {
        super();
        this.id = "";
        this.nombre = "";
        this.img = "";
    }
    render() {
        return html `              
          <div class="item">
            <img src="${this.img}">
            <p>${this.nombre}</p>
            <p>${this.id}</p>                      
          </div>                  
        `;
    }
}