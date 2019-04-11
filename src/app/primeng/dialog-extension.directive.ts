import {Directive, EventEmitter, HostListener, NgZone} from '@angular/core';
import {Dialog} from 'primeng/dialog';

@Directive({
  selector: '[appDialogExtension]'
})
export class DialogExtensionDirective {

  onResize = new EventEmitter<object>();
  documentResizeListener: any;
  interval;
  lastPageX = 0;
  lastPageY = 0;
  deltaX = 0;
  deltaY = 0;

  constructor(private dialog: Dialog, private zone: NgZone) {
  }

  resize(event) {
    if (this.dialog.resizing) {
      this.deltaX += event.pageX - this.lastPageX;
      this.deltaY += event.pageY - this.lastPageY;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    if (this.dialog.resizing) {
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.documentResizeListener = this.resize.bind(this);
        window.document.addEventListener('mousemove', this.documentResizeListener);
        this.interval = setInterval(() => {
          this.onResize.emit({x: this.deltaX, y: this.deltaY});
          this.deltaX = 0;
          this.deltaY = 0;
        }, 200);
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    if (this.dialog.resizing) {
      window.document.removeEventListener('mousemove', this.documentResizeListener);
      clearInterval(this.interval);
    }
  }
}
