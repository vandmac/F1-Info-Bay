import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstructorsF1Service } from 'src/app/services/constructorsF1/constructorsF1.service';
import { MatTableDataSource } from '@angular/material/table';
import { Constructor } from '../../services/constructorsF1/constructorsF1';

@Component({
  selector: 'app-constructorsF1',
  templateUrl: './constructorsF1.component.html',
  styleUrls: ['./constructorsF1.component.scss'],
})
export class ConstructorsF1Component implements OnInit {
  public constructorsF1$: Observable<Constructor[]>;
  displayedColumns: string[] = ['name', 'nationality', 'url'];
  dataSource = new MatTableDataSource(Constructors);

  constructor(private constructorsF1Service: ConstructorsF1Service) {
    this.constructorsF1$ = this.constructorsF1Service.getConstructorsF1();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {}
}
