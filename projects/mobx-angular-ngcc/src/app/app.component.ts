import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *mobxAutorun>
      {{ store.value }} - {{ store.computedValue }}
      <button (click)="store.action">Action</button>
    </div>
  `
})
export class AppComponent {
    constructor(public store: Store) {}
}
