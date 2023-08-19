import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-file-upload-demo1',
  templateUrl: './file-upload-demo1.component.html',
  styleUrls: ['./file-upload-demo1.component.css']
})
export class FileUploadDemo1Component implements OnInit {
  
  formModal: any;
  constructor() {}
  
  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
  
  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

}
