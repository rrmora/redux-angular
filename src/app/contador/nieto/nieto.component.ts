import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';
import { AppState } from '../interfaces/appState';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador: number;
  //@Input() contador: number;
  //@Output() contadorReset = new EventEmitter<number>();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {this.contador = contador;});
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
  /*reset() {
    this.contador = 0;
    this.contadorReset.emit(0);
  }*/

}
