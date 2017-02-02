import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    const now: Date = new Date();

    if (now.getHours() > 4 && now.getHours() <= 11) {
      value = 'Bom dia' + value;
    } else if (now.getHours() >= 12 && now.getHours() <= 18) {
      value = 'Boa tarde' + value;
    } else {
      value = 'Boa noite' + value;
    }

    return value;
  }
}
