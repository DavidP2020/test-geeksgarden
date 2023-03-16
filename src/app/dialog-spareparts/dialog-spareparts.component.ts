import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SparepartsService } from '../service/spareparts.service';
@Component({
  selector: 'app-dialog-spareparts',
  templateUrl: './dialog-spareparts.component.html',
  styleUrls: ['./dialog-spareparts.component.css']
})
export class DialogSparepartsComponent implements OnInit {

  actionBtn: string = "Save"
  projectForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private service: SparepartsService, private dialogRef: MatDialogRef<DialogSparepartsComponent>,
    @Inject(MAT_DIALOG_DATA) public viewData: any,) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      id: ['', Validators.required],
      spareparttName: ['', Validators.required],
      quantity: ['', Validators.required],
      type: ['', Validators.required],
      locationId: ['', Validators.required],
      modelNumber: ['', Validators.required],
      manufacturer: ['', Validators.required],
      currentStatus: ['', Validators.required],

    })
    if (this.viewData) {
      this.actionBtn = "Delete"
      this.projectForm.controls['id'].setValue(this.viewData.id)
      this.projectForm.controls['spareparttName'].setValue(this.viewData.spareparttName)
      this.projectForm.controls['quantity'].setValue(this.viewData.quantity)
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
