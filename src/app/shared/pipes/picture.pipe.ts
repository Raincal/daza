import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picture'
})

export class PicturePipe implements PipeTransform {
  transform(value: any, link: string): any {
    if (link.indexOf('segmentfault') > -1) {
      let result = this.parseDom(value);
      return result;
    }
    return value;
  }

  parseDom(value: string): string {
    const parser: DOMParser = new DOMParser();
    let doc = parser.parseFromString(value, 'text/html');
    let oImg: NodeListOf<HTMLImageElement> = doc.querySelectorAll('img');
    let imgLen = oImg.length;
    if (imgLen > 0) {
      for (let i = 0; i < imgLen; i++) {
        let target = oImg[i];
        target.src = `https://segmentfault.com${target.getAttribute('src')}`;
      }
    }
    return doc.body.innerHTML;
  }
}
