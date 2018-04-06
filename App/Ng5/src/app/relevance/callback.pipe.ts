import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {
  transform(items: Array<any>, toggle: boolean, toggle2: boolean): Array<any> {
    return items.filter(item => item.neutrality === toggle && item.enviroment == toggle2);
  }
}
