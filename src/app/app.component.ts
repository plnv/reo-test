import { Component } from '@angular/core';

function F() {
  console.log('f(): evaluated');
  return (target, propertyKey: string, descriptor: any) => {
    console.log('f(): called', target, propertyKey, descriptor);
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reo-test';
}

export function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';

    test() {
      this.hello = 'zzz';
    }
  };
}

@classDecorator
class Greeter {
  property = 'property';
  hello: string;

  constructor(m: string) {
    this.hello = m;
  }
}

class Greeter1 {
  property = 'property';
  hello: string;

  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter1(''), new Greeter('world'));
