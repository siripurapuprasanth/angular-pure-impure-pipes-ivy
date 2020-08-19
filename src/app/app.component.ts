import { Component, VERSION } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[DatePipe]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  inputValue = 1000000;
  inputDate;
  transformedDate;
  employee={firstName: 'Grant', lastName:'Harrier'};
constructor(private datePipe:DatePipe){

}
  onButtonClick(event){
    console.log(this.inputDate)
    this.transformedDate = this.datePipe.transform(this.inputDate, 'dd MMM yyyy')
  }
}
