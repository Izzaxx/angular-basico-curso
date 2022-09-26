import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public title         : string = 'Counter App';
  public counterNumber : number = 10;
  public base          : number = 5

  public accumulate( valor: number ): void {
    this.counterNumber += valor;
  }

}
