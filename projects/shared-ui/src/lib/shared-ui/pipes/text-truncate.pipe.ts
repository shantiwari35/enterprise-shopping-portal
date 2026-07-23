import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: unknown,length: number=20, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      if (value.length > length) {
        return value.substring(0, length) + '...';
      }
    }
    return value;
  }

}
