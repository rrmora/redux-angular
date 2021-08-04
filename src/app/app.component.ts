import { AppState } from './contador/interfaces/appState';
import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { DecrementAction, IncrementAction } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador:number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe( contador => {
      // this.contador = state.contador;
      this.contador = contador
    })
  }

  increment() {
    // const action: Action = { type: 'INCREMENTAR'};
    const action = new IncrementAction();
    this.store.dispatch(action);
  }

  decrement() {
    // const action: Action = { type: 'DECREMENTAR'};
    const action = new DecrementAction();
    this.store.dispatch(action);
  }
  /*constructor(private store: Store<AppState>) {
    this.contador = 10;    
  }

  increment() {
    console.log('increment');
    this.contador ++;
  }

  decrement() {
    console.log('decrement');
    this.contador --;
  }*/

}
