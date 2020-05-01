import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: any;
  title = 'pureStudyApp';

private applySearch(event): void {
    console.log(event);
  }
}
