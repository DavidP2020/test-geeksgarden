import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SparepartsService } from '../service/spareparts.service';

@Component({
  selector: 'app-emptyspare',
  templateUrl: './emptyspare.component.html',
  styleUrls: ['./emptyspare.component.css']
})
export class EmptyspareComponent implements OnInit {
  data: any;
  displayedColumns: string[] = ['spareparttName', 'locationId', 'currentStatus'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private service: SparepartsService) { }

  getAllItem() {
    this.service.getItem().subscribe({
      next: (res) => {
        this.data = res
        console.log(this.data)
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
