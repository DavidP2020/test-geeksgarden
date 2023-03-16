import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAssetsComponent } from '../dialog-assets/dialog-assets.component';
import { AssetsService } from '../service/assets.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  data: any;
  displayedColumns: string[] = ['id', 'assetName', 'serialNumber', 'type', 'locationId', 'modelNumber', 'manufacturer', 'currentStatus'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private dialog: MatDialog, private service: AssetsService) { }
  openDialog() {
    this.dialog.open(DialogAssetsComponent, {
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
    this.dialog.open(DialogAssetsComponent, {
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
