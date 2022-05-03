function MethodBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    get() {
      const boundFunction = originalMethod.bind(this);
    }
  }
}


class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.templateElement = document.querySelector("#project-input")! as HTMLTemplateElement;
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInput = this.element.querySelector("#title")! as HTMLInputElement;
    this.descriptionInput = this.element.querySelector("#description")! as HTMLInputElement;
    this.peopleInput = this.element.querySelector("#people")! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInput.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }
}

const prjInput = new ProjectInput();