import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObjectKeyPipe } from './pipes/object-key.pipe';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule
   ],
   declarations: [
      ObjectKeyPipe
   ],
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ObjectKeyPipe
   ]
})
export class SharedModule { }
