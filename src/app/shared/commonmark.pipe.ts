import { Pipe, PipeTransform } from '@angular/core';
import * as commonmark from 'commonmark';

@Pipe({
  name: 'commonmark'
})

export class CommonmarkPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parsed = reader.parse(value);
    // transform parsed if you like...
    const result = writer.render(parsed);
    return result;
  }
}
