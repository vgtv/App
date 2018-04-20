import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {
  transform(items: Array<any>, value: boolean, valueNeutrality: boolean, valueEnviroment: boolean): Array<any> {
    if (!value) {
      return items;
    }
    return items.filter(item => item.neutrality === !valueNeutrality && item.enviroment == !valueEnviroment);
  }
}
