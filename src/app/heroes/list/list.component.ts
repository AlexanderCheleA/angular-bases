import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spierman', 'Hulk', 'Pantera'];
  public deleteHero?:string;

  public removeLastHeroe():void {
    this.deleteHero = this.heroName.pop();
  }

}
