import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObjectKeyPipe } from './pipes/object-key.pipe';
import { LoadingComponent } from './layouts/loading/loading.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule
   ],
   declarations: [
      ObjectKeyPipe,
      LoadingComponent
   ],
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ObjectKeyPipe,
      LoadingComponent
   ]
})
export class SharedModule { }
