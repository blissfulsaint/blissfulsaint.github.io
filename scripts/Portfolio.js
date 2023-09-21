export default class Workout {
    constructor (name, link, github, image) {
        this.name = name;
        this.link = link;
        this.github = github;
        this.image = image;

        this.init();
    }

    async init() {
        let html = `<div class="card">
            <div class="img-container">
                <img src="${this.image}" alt="thumbnail image">
            </div>
            <p class="name">${this.name}</p>`;

        html += `<div class="links">`;
        
        if (this.link != null) {
            html += `<a class="link button" href="${this.link}" target="_blank">App Demo</a>`;
        }

        if (this.github != null) {
            html += `<a class="github button" href="${this.github}" target="_blank">GitHub Repo</a>`;
        }
        html += `</div></div>`;

        document.getElementById('portfolio-container').insertAdjacentHTML('beforeend', html);
    }
}