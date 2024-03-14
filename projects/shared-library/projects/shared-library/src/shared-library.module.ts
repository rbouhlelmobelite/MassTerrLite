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
import { ButtonComponent } from './button/button.component';
import { HeaderProjectComponent } from './header-project/header-project.component';
import { HeaderComponent } from './header/header.component';
import { SharedLibraryComponent } from './lib/shared-library.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedSelectComponent } from './shared-select/shared-select.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    SharedLibraryComponent,
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
    SharedLibraryComponent,
    HeaderComponent,
    PaginationComponent,
    ButtonComponent,
    HeaderProjectComponent,
    SharedSelectComponent,
  ],
})
export class SharedLibraryModule { }
