import { Component } from '@angular/core';
import { AppService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingChallenge';

  constructor(public service: AppService){}
}
