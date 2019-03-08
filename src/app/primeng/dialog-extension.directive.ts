import {Directive, EventEmitter, HostListener, NgZone} from '@angular/core';
import {Dialog} from 'primeng/dialog';

@Directive({
  selector: '[appDialogExtension]'
})
export class DialogExtensionDirective {

  onResize = new EventEmitter<object>();
  documentResizeListener: any;
  lastPageX = 0;
  lastPageY = 0;

  constructor(private dialog: Dialog, private zone: NgZone) {
  }

  resize(event) {
    if (this.dialog.resizing) {
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      this.onResize.emit({deltaX: deltaX, deltaY: deltaY});
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    if (this.dialog.resizable) {
      this.zone.runOutsideAngular(() => {
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.documentResizeListener = this.resize.bind(this);
        window.document.addEventListener('mousemove', this.documentResizeListener);
      });
    }
  }

  @HostListener('mouseup')
  onMouseUp() {
    if (this.dialog.resizing) {
      window.document.removeEventListener('mousemove', this.documentResizeListener);
    }
  }
}
