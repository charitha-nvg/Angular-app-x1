import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Comp101Component} from './comp-101/comp-101.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Comp101Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
