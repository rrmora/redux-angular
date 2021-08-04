import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { DividirAction, MultiplicartAction } from '../contador.actions';
import { AppState } from '../interfaces/appState';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  //@Input() contador: number;
  //@Output() cambioContador = new EventEmitter<number>();
  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {this.contador = contador;});
  }

  multiplicar() {
    const action = new MultiplicartAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new DividirAction(10);
    this.store.dispatch(action);
  }

  /*multiplicar() {
    this.contador = this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador = this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    this.cambioContador.emit(nuevoContador);
  }*/

}
