import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]= []

  @Output()
  public deleteCharacterById: EventEmitter<string>= new EventEmitter()

  // onDelete(index:number):void {
  //   this.onNewDelete.emit(index)
  // }

  onDelete(id:string|undefined):void {
    this.deleteCharacterById.emit(id)
  }
  onDeleteCharacter(index:number):void{
    //TODO
    console.log(index);

  }
}

