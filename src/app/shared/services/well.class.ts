import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injector } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { classToClass, plainToClass } from 'class-transformer';
import { Well, Wells } from '../class/Well.class';
import { Router, RouterStateSnapshot } from '@angular/router';
import { validate } from 'class-validator';
import { classDecorator } from '../../app.component';
import { SupService } from './sup.service';

const TEMP: Well[] = Array(200)
  .fill(null)
  .map((i, index) => ({
    id: index,
    name: Math.random()
      .toString(36)
      .substring(10),
  }));

class WellThird<T> {
  private http: HttpClient = this.injector.get(HttpClient);
  private router: Router = this.injector.get(Router);

  private zzz = 'zzz';

  constructor(protected injector: Injector) {}

  get(): Observable<Wells> {
    console.log(this.zzz);
    return of(TEMP).pipe(
      map(i => plainToClass(Well, i)),
      switchMap(i => {
        // console.log(i);
        const wells = new Wells();
        wells.wells = i;
        return of(wells).pipe(
          tap(j => validate(j).then(l => console.log('asd', l)))
        );
      })
    );
  }
}

@classDecorator
export class WellClass<T> extends WellThird<T> {
  private r: SupService = this.injector.get(SupService);

  constructor(protected injector: Injector) {
    super(injector);
    console.log(this);
  }
}
