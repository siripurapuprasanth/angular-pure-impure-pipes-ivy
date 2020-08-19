import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    let returnVal = '';
    if(value){
       returnVal += value[args[0]];
      for(let i=1; i<args.length; i++){
        const el = args[i];
        returnVal += ' - ' + value[el];
      }
      // return null;//value[firstName]  + ' - ' + args.lastName;
    }
    return returnVal;
  }

}