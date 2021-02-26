import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
