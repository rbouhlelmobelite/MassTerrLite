import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent, HeaderComponent, HeaderProjectComponent, PaginationComponent, SharedSelectComponent } from './public-api';


@NgModule({
  declarations: [
    HeaderComponent,
    PaginationComponent,
    ButtonComponent,
    HeaderProjectComponent,
    SharedSelectComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  exports: [
    HeaderComponent,
    PaginationComponent,
    ButtonComponent,
    HeaderProjectComponent,
    SharedSelectComponent,
  ],
})
export class SharedLibraryModule { }
