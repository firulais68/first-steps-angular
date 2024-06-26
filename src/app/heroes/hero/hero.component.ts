import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {
  public name:    string= "ironman";
  public age:     number= 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`;
  }

  changeName():void {
    this.name = "Spiderman";
    //TODO
    throw "Metodo no implementado";
  }

  changeAge():void {
    this.age = 25;
    //TODO
    throw "Metodo no implementado";
  }

  resetForm():void {
    this.name= "ironman";
    this.age= 45;
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'
    // document.querySelectorAll('h1').forEach ( elemento => {
    //   elemento.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }

}
