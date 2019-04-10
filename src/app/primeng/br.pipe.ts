import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'br',
  pure: true
})
export class BrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const html = this.htmlEncode(value);
    return html.replace(/\n/g, '<BR>');
  }

  private htmlEncode(html): string {
    let element = document.createElement('span');
    element.textContent !== null ? element.textContent = html : element.innerText = html;
    const encodedHtml = element.innerHTML;
    element = null;
    return encodedHtml;
  }

}
