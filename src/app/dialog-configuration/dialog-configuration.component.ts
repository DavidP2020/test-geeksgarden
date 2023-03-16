import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { ConfigurationService } from '../service/configuration.service';

@Component({
  selector: 'app-dialog-configuration',
  templateUrl: './dialog-configuration.component.html',
  styleUrls: ['./dialog-configuration.component.css']
})
export class DialogConfigurationComponent implements OnInit {

  actionBtn: string = "Save"
  projectForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private service: ConfigurationService, private dialogRef: MatDialogRef<DialogConfigurationComponent>,
    @Inject(MAT_DIALOG_DATA) public viewData: any,) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      id: ['', Validators.required],
      confignName: ['', Validators.required],
      type: ['', Validators.required],
      details: ['', Validators.required],

    })
    if (this.viewData) {
      this.actionBtn = "Delete"
      this.projectForm.controls['id'].setValue(this.viewData.id)
      this.projectForm.controls['confignName'].setValue(this.viewData.confignName)
      this.projectForm.controls['type'].setValue(this.viewData.type)
      this.projectForm.controls['details'].setValue(this.viewData.details)
    }
  }

  addItem() {
    if (!this.viewData) {
      console.log(this.projectForm.value)
      if (this.projectForm.valid) {
        this.service.postitem(this.projectForm.value).subscribe({
          next: (res) => {
            alert("Project Added Successfully")
            this.projectForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert(err)
          }
        })
      }
    }
    else {
      console.log(this.viewData)
      this.updateItem();
    }
  }
  updateItem() {
    this.service.putItem(this.projectForm.value, this.viewData.id).subscribe({
      next: (res) => {
        alert("Project Updated Successfully")
        this.projectForm.reset();
        this.dialogRef.close('update');
      },
      error: (err) => {
        alert(err)
      }
    })
  }

  deleteItem() {
    this.service.deleteItem(this.viewData.id).subscribe({
      next: (res) => {
        alert("Project Deleted Successfully")
        this.dialogRef.close('delete');
      },
      error: (err) => {
        alert(err)
      }
    })
  }

}
