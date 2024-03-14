import { Component } from '@angular/core';
import { PageChangeEvent } from 'projects/shared-library/dist/shared-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MassTerLibrary';

  items: any[] = [
    /* Your list of items here */
  ];

  totalItems = this.items.length;
  pageSize = 10;

  onPageChange(page: PageChangeEvent): void {
    /* Logic to fetch items for the selected page */
  }
}
