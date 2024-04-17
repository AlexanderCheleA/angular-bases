import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;


  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'SpiderMan';
  }

  changeAge():void {
    this.age = 23;
  }

  resetFrom():void {
    this.name = 'Ironman';
    this.age = 45;

    //No usar directamente codigo js
    //document.querySelectorAll('h1')!.forEach(element => {
    //  element.innerHTML = '<h1>Desde Angular</h1>';
    //});
  }


}
