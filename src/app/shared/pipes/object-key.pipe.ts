import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKey',
  pure: false
})
export class ObjectKeyPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

}
