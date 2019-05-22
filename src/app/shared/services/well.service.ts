import { Injectable, Injector } from '@angular/core';
import { WellClass } from './well.class';
import { log } from 'util';

@Injectable({ providedIn: 'root' })
export class WellService<T> extends WellClass<T> {
  // zzz = 'aaa';

  constructor(protected injector: Injector) {
    super(injector);
    console.log(this);
  }
}
