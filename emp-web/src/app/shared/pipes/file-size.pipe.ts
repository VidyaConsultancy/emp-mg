import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: number, unit: string = 'MB'): string {
    let base = 0;
    switch (unit) {
      case 'KB':
        base = 1000;
        break;

      case 'MB':
        base *= 1000;
        break;

      case 'GB':
        base *= 1000 * 1000;
        break;

      default:
        base = 0;
        break;
    }

    return `${value / base} ${unit}`;
  }
}
