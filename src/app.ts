// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
//
// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function <T extends { new(...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     console.log("Rendering template");
//
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookElement = document.getElementById(hookId);
//         if (hookElement) {
//           hookElement.innerHTML = template;
//           hookElement.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   }
//     ;
// };
//
// @Logger("LOGGING")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";
//
//   constructor() {
//     console.log("Creating person object...");
//   }
// }
//
// const pers = new Person();
// console.log(pers);
//
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator");
//   console.log(target, propertyName);
// }
//
// function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//   console.log("Accessor Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
//   return {};
// }
//
// function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log("METHOD Decorator");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
//
// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
//
// class Product {
//   @Log
//   public title: string;
//
//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid Price - should be negative!");
//     }
//   }
//
//   constructor(t: string, private _price: number) {
//     this.title = t;
//   }
//
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
//
// const p1 = new Product("Book", 19);
// const p2 = new Product("Book 2", 29);
//
// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjustedDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return originalMethod.bind(this);
//     }
//   };
//   return adjustedDescriptor;
// }
//
// class Printer {
//   message = "This works";
//
//   @AutoBind
//   showMessage() {
//     console.log(this.message);
//   }
// }
//
// const p = new Printer();
//
// const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[] // ["required", "positive"]
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"]
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"]
  };
}

function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    console.log(prop);
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid");
    return;
  }
  console.log(createdCourse);
});