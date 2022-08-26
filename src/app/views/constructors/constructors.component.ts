import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorsService } from '../../services/constructors/constructors-service.service';
// import { MatTableDataSource } from '@angular/material/table';
import { Constructors } from '../../services/constructors/constructors';
@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.scss']
})
export class ConstructorsComponent implements OnInit {
  constructor(private constructorsService: ConstructorsService) {
    this.constructors$ = this.constructorsService.getConstructorsTable();
  }
  displayedColumns: string[] = [
    'Konstruktor',
    'url',
    'Nazwa',
    'Kraj',
  ];
  public constructors$: Observable<Constructors>;

  ngOnInit(): void {}
}
