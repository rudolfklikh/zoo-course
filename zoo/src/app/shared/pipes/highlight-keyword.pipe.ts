import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zooHighlightKeyword',
  standalone: true,
})
export class ZooHighlightKeywordPipe implements PipeTransform {

  transform(value: string | undefined, keyword: string): string {
    if (!keyword || !value) {
      return '';
    }
    const regex = new RegExp(`(${keyword.toLowerCase()})`, 'gi');
    return value.toLowerCase().replace(regex, `<span class="text-highlight">$1</span>`);
  }

}