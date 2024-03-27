import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay } from 'rxjs';
import { GlobalService } from './core/services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authmicrofrontend';

  appIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public globalService: GlobalService, private readonly router: Router) {
    this.globalService.isLoading$.pipe(delay(0)).subscribe((isLoading) => {
      this.appIsLoading$.next(isLoading);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.globalService.setLoadingState(false);
    }, 500);
  }
}
