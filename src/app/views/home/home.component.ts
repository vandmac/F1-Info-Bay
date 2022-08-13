import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {interval, tap} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}
