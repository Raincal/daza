import { Pipe, PipeTransform } from '@angular/core';
import * as showdown from 'showdown';

@Pipe({
  name: 'commonmark'
})

export class CommonmarkPipe implements PipeTransform {
  transform(text: any, args: any[]): any {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);
    return html;
  }
}
