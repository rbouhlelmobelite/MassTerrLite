import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PageChangeEvent {
  currentPage: number;
  itemsPerPage: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pageSizeOptions: number[] = [5, 10, 15, 20];
  @Input() pageSize = 5;
  @Input() totalItems = 0;
  @Output() pageChange: EventEmitter<PageChangeEvent> = new EventEmitter<PageChangeEvent>();

  currentPage = 1;

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    const pageEvent: PageChangeEvent = {
      currentPage: this.currentPage,
      itemsPerPage: this.pageSize,
    };
    this.pageChange.emit(pageEvent);
  }
}
