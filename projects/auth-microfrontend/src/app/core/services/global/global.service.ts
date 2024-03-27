import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private isLoadingSubject = new BehaviorSubject<boolean>(true);
  isLoading$ = this.isLoadingSubject.asObservable();

  constructor() {}

  setLoadingState(isLoading: boolean): void {
    this.isLoadingSubject.next(isLoading);
  }
}
