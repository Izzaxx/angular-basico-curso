import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent  {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public removedHero: string = "";

  public removeHero(): void {
    this.removedHero = this.heroes.shift() || "";
  }

}
