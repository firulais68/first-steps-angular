import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './gifs-card-list.component.html',

})
export class GifsCardListComponent  {

  @Input()
  public gifs: Gif[] = [];

  constructor(private giftsService:GifsService) { }


}
