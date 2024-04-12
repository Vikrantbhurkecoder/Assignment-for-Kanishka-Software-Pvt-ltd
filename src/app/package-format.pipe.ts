import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packageFormat'
})
export class PackageFormatPipe implements PipeTransform {
  transform(value: string): string {
    const numberPart = value.replace(/[₹L]/g, '');
    const formattedNumber = parseFloat(numberPart).toLocaleString('en-IN', { maximumFractionDigits: 2 });
    return '₹' + formattedNumber + 'L';
  }

  
}
