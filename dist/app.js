"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.querySelector("#project-input");
        this.hostElement = document.querySelector("#app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInput = this.element.querySelector("#title");
        this.descriptionInput = this.element.querySelector("#description");
        this.peopleInput = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInput.value);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map