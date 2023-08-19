import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadDemo1Component } from './file-upload-demo1/file-upload-demo1.component';

const routes: Routes = [
  { path:  '**', component:FileUploadDemo1Component },
  { path:  '', component:FileUploadDemo1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
