import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription} from 'rxjs';
import { ConstructorsF1Service } from 'src/app/services/constructorsF1/constructorsF1.service';
import { MatTableDataSource } from '@angular/material/table';
import { Constructor } from '../../services/constructorsF1/constructorsF1';

@Component({
  selector: 'app-constructorsF1',
  templateUrl: './constructorsF1.component.html',
  styleUrls: ['./constructorsF1.component.scss'],
})
export class ConstructorsF1Component implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'nationality', 'url'];
  dataSource!: MatTableDataSource<Constructor>;
  subscription: Subscription;

  constructor(private constructorsF1Service: ConstructorsF1Service) {
    this.subscription = this.constructorsF1Service.getConstructorsF1().subscribe((downloadedData) => {
      this.dataSource =  new MatTableDataSource(downloadedData);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}