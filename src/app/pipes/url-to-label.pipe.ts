import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlToLabel'
})
export class UrlToLabelPipe implements PipeTransform {

  transform(url: string): string {
    if (!url) return '';
    if (url.includes('github')) return 'GitHub';
    if (url.includes('linkedin')) return 'LinkedIn';
    if (url.includes('youtube')) return 'YouTube';
    return 'Link';
  }

}
