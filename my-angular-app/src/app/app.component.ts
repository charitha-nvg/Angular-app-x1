import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyNewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app-Chari';
}
