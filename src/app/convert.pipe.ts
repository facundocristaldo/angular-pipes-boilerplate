import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (isNaN(value)) return null;
    switch (args[0]) {
      case "km":
        return parseFloat(value) * 1.60934
      case "m":
        return parseFloat(value) * 1.60934 * 1000
      case "cm":
        return parseFloat(value) * 1.60934 * 1000 * 1000
      default:
        throw new Error("Target unit not supported")
    }
  }

}
