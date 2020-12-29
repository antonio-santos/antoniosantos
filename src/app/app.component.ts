import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  year = '2021';

  getWelcomingMessage(userName: string): string {
    return `${userName} ${this.year}`;
  }
}
