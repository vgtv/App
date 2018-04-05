import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {
  transform(items: Array<any>, toggle: boolean): Array<any> {
    return items.filter(item => item.neutral === toggle);
  }
}
