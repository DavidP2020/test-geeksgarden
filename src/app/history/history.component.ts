import { HistoryService } from '../service/history.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['id', 'assetId', 'userId', 'details'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private service: HistoryService) { }


  getAllItem() {
    this.service.getItem().subscribe({
      next: (res) => {
        this.data = res
        this.dataSource = new MatTableDataSource<any>(this.data);
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator
      },
      error: (err) => {
        alert(err)
      }
    })
  }
  ngOnInit(): void {
    this.getAllItem();
  }


}
