import { Component } from '@angular/core';
import { range } from "lodash";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  range=range;
}
