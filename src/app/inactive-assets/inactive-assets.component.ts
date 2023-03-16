import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetsService } from '../service/assets.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-inactive-assets',
  templateUrl: './inactive-assets.component.html',
  styleUrls: ['./inactive-assets.component.css']
})
export class InactiveAssetsComponent implements OnInit {

  data: any;
  displayedColumns: string[] = ['assetName', 'locationId', 'currentStatus'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private service: AssetsService) { }

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
