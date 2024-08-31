import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
  standalone: true,
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    const result: number = Math.pow(value, exponent);
    return result;
  }
}
