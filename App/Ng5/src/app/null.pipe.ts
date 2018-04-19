import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknown',
  pure: false
})
export class NullPipe implements PipeTransform {
  transform(value: any): any {
    if (value === 'null') {
      return 'Ukjent';
    }
    return value;
  }
}
