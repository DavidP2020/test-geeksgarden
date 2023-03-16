import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAssetsComponent } from '../dialog-assets/dialog-assets.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ConfigurationService } from '../service/configuration.service';
import { DialogConfigurationComponent } from '../dialog-configuration/dialog-configuration.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {


  data: any;
  displayedColumns: string[] = ['id', 'confignName', 'type', 'details', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private dialog: MatDialog, private service: ConfigurationService) { }
  openDialog() {
    this.dialog.open(DialogConfigurationComponent, {
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
    this.dialog.open(DialogConfigurationComponent, {
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
