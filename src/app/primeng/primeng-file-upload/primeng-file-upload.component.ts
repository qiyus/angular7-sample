import {Component, OnInit, ViewChild} from '@angular/core';
import {FileUpload} from 'primeng/primeng';

@Component({
  selector: 'app-primeng-file-upload',
  templateUrl: './primeng-file-upload.component.html',
  styleUrls: ['./primeng-file-upload.component.css']
})
export class PrimengFileUploadComponent implements OnInit {

  files: string[] = [];

  @ViewChild('upload') upload: FileUpload;

  constructor() { }

  ngOnInit() {
  }

  onBasicUpload(event) {
    this.files.push(event.files[0]);
  }

  btnUploadOnClick(event) {
    this.files.push(event.files[0]);
    this.upload.clear();
  }
}
