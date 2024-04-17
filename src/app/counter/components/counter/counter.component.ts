import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter {{counter}}</h2>

  <hr>

  <button (click)="increasyBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increasyBy(-1)">-1</button>

  <hr>\
`,
})

export class CounterComponent {
  constructor() { }

  public counter: number = 2;

  increasyBy(value: number): void {
    this.counter = this.counter + value;
    // this.counter += 1;
  }

  reset():void {
    this.counter = 10;
  }
}
