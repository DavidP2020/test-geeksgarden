import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { SparepartsService } from '../service/spareparts.service';
import { DialogSparepartsComponent } from '../dialog-spareparts/dialog-spareparts.component';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.css']
})
export class SparepartsComponent implements OnInit {

  data: any;
  displayedColumns: string[] = ['id', 'spareparttName', 'quantity', 'type', 'locationId', 'modelNumber', 'manufacturer', 'currentStatus'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private dialog: MatDialog, private service: SparepartsService) { }
  openDialog() {
    this.dialog.open(DialogSparepartsComponent, {
      width: '80%',
    }).afterClosed().subscribe(val => {
      if (val === "save") {
        this.getAllItem();
      }
    });
  }
  getAllItem() {
    this.service.getItem().subscribe({
      next: (res) => {
        console.log(res)
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
  viewItem(element: any) {
    this.dialog.open(DialogSparepartsComponent, {
      width: '80%',
      data: element
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllItem();
      }
    });
  }
  ngOnInit(): void {
    this.getAllItem();
  }

}
