import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodifyPipe',
  pure: false,
})
export class NodifyPipe implements PipeTransform {
  transform(data: any): string[] {
    if (data) {
      return data.map((x) => {
        return x.properties.name;
      });
    } else {
      return [];
    }
  }
}
