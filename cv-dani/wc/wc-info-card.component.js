// const html = function (templates, ...values) {
//     const template = document.createElement('template')
//     let str = ''
//     templates.forEach((template, index) => {
//         str += template
//         str = values[index] ? str + values[index] : str
//     })
//     template.innerHTML = str.trim()
//     return template.content
// }

class infoCard extends HTMLElement {

    constructor() {
        super()
        this.topTitle=this.getAttribute("top-title")
        this.title=this.getAttribute("title")
        this.botTitle=this.getAttribute("bot-title")
        this.date=this.getAttribute("date")
    }

    _render() {
        const inner = html`
    <style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .information-card{
        width:100%;
        margin: 0 0 12px ;
        font-size: 14px;
        background-color:var(--light-tone);
        padding:12px;
        border-radius:4px;
        transition:all 0.4s ease;
    }
    .information-card:hover{
        filter:brightness(0.9);
    }
    .information-card .top-title{  
        font-weight: 600;
        color: var(--semidark-tone);
        margin-bottom: 4px;
    }
    .information-card .title{
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .information-card .bot-title{
        font-weight: 400;
        color: var(--semidark-tone);
    }
    .information-card .date{
        font-weight: 600;
    }
    ::selection{
    background-color: var(--dark-tone);
    color: var(--light-tone);
    }
    </style>    
            
            
    <div class="information-card">

        <p class="top-title">${this.topTitle}</p>
        <h5 class="title">${this.title}</h5>
        <p class="bot-title">${this.botTitle}<span class="date">${this.date}</span></P>

    </div>`
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(inner)
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('wc-info-card',infoCard )
