

import {Component} from '@angular/core';



@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>

        <button (click)="sumar()"> + {{varAcumula}}</button>

        <span>{{numero}}</span>

        <button (click)="restar()"> - {{varAcumula}}</button>

        <h2>Selecciona base</h2>
        <hr>
        <br>

        <button (click)="varAcumula = 1">1</button>
        <button (click)="varAcumula = 2">2</button>
        <button (click)="varAcumula = 4">4</button>
        <button (click)="varAcumula = 6">6</button>




    `
})

export class ContadorComponent {

    titulo    : string = 'Contador App';
    numero    : number = 0;
    varAcumula: number = 0;
  
    sumar() {
      this.numero += this.varAcumula;
    }
  
    restar(){
      this.numero -= this.varAcumula;
    }

}