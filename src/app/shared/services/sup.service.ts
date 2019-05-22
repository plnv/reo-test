import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SupService {
  constructor() {
    console.log('SupService');
  }

  get() {}
}
