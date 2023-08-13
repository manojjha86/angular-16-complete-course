import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform{
    transform(value: number, total: number, decimal: number = 0) {
        console.log('PERCENTAGE PIPE CALLED!');
        return (value / total * 100).toFixed(decimal) + '%';
    }
}