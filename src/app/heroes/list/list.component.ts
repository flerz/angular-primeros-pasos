import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public heroName: string |undefined = ''

  removeLastHero():void {
    const deletedHero: string|undefined = this.heroNames.pop()
    this.heroName = deletedHero
    console.log(deletedHero);

  }

}
