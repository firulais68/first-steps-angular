import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  @Input()
  public characterList : Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //Emitir
  //onDelete() = index value: number
  // onDelete(): number {

  //   console.log(this.characterList);
  //   if ( this.characterList.length === 0 ) return -1;
  //   this.onDeleteChar.emit(this.characterList.index);


  // }

  onDeleteCharacter(id?:string):void {

    if (!id ) return;
    this.onDelete.emit(id);

  }


}
