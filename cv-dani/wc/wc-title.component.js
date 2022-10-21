const html = function (templates, ...values) {
    const template = document.createElement('template')
    let str = ''
    templates.forEach((template, index) => {
        str += template
        str = values[index] ? str + values[index] : str
    })
    template.innerHTML = str.trim()
    return template.content
}

class wcTitle extends HTMLElement {

    constructor() {
        super()
        this.title=this.getAttribute("title")
    }

    _render() {
        const inner = html`
        <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .title-card{
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            letter-spacing: 2px;
            margin: 0 0 24px;
        }
        .title-card h3{
            margin: 0 0 4px;
            color: var(--dark-tone);
        }
        .title-card hr{
            width: 40px;
            height: 4px;
            background-color: var(--dark-tone);
            border: none;
            border-radius: 1.6px;
            transition: all 0.8s ease;
        }
        .title-card:hover hr{
            width: 100%;
        }
        ::selection{
        background-color: var(--dark-tone);
        color: var(--light-tone);
        }
        </style>

        <div class="title-card">
            <h3>${this.title}</h3>
            <hr>
        </div>`
        
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(inner)
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('wc-title', wcTitle)
