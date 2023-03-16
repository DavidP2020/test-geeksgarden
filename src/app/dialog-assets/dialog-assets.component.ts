import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AssetsService } from '../service/assets.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
  selector: 'app-dialog-assets',
  templateUrl: './dialog-assets.component.html',
  styleUrls: ['./dialog-assets.component.css']
})
export class DialogAssetsComponent implements OnInit {
  actionBtn: string = "Save"
  projectForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private service: AssetsService, private dialogRef: MatDialogRef<DialogAssetsComponent>,
    @Inject(MAT_DIALOG_DATA) public viewData: any,) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      id: ['', Validators.required],
      assetName: ['', Validators.required],
      serialNumber: ['', Validators.required],
      type: ['', Validators.required],
      locationId: ['', Validators.required],
      modelNumber: ['', Validators.required],
      manufacturer: ['', Validators.required],
      currentStatus: ['', Validators.required],

    })
    if (this.viewData) {
      this.actionBtn = "Delete"
      this.projectForm.controls['id'].setValue(this.viewData.id)
      this.projectForm.controls['assetName'].setValue(this.viewData.assetName)
      this.projectForm.controls['serialNumber'].setValue(this.viewData.serialNumber)
      this.projectForm.controls['type'].setValue(this.viewData.type)
      this.projectForm.controls['locationId'].setValue(this.viewData.locationId)
      this.projectForm.controls['modelNumber'].setValue(this.viewData.modelNumber)
      this.projectForm.controls['manufacturer'].setValue(this.viewData.manufacturer)
      this.projectForm.controls['currentStatus'].setValue(this.viewData.currentStatus)
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


