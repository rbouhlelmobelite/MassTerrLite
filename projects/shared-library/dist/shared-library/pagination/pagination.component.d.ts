import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface PageChangeEvent {
    currentPage: number;
    itemsPerPage: number;
}
export declare class PaginationComponent {
    pageSizeOptions: number[];
    pageSize: number;
    totalItems: number;
    pageChange: EventEmitter<PageChangeEvent>;
    currentPage: number;
    onPageChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "app-pagination", never, { "pageSizeOptions": "pageSizeOptions"; "pageSize": "pageSize"; "totalItems": "totalItems"; }, { "pageChange": "pageChange"; }, never, never, false, never>;
}
