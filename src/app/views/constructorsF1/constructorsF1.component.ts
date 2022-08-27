import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorsF1Service } from 'src/app/services/constructorsF1/constructorsF1.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConstructorsF1 } from '../../services/constructorsF1/constructorsF1'

@Component({
  selector: 'app-constructorsF1',
  templateUrl: './constructorsF1.component.html',
  styleUrls: ['./constructorsF1.component.scss']
})
export class ConstructorsF1Component implements OnInit {

  constructor(private constructorsF1Service: ConstructorsF1Service) {
    this.constructorsF1$ = this.constructorsF1Service.getConstructorsF1();
  }
  displayedColumns: string[] = [
    'Name',
    'Nationality',
    'url'
  ];

  public constructorsF1$: Observable<ConstructorsF1>;
  
  ngOnInit(): void {}
  }

