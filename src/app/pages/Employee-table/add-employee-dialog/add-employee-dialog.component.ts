import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent implements OnInit {
  employeeForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    education: ['', Validators.required],
    company: ['', Validators.required],
    experience: ['', Validators.required],
    package: ['', Validators.required]
  });

  constructor(public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    if (this.data) {
      this.employeeForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value); 
      const newEmployeeData = this.employeeForm.value;
      this.dialogRef.close(newEmployeeData);
      this.employeeForm.reset(); 
      Swal.fire('Success!', 'Employee Added Successfully', 'success');
    } else {
      this.employeeForm.markAllAsTouched();
      Swal.fire('Error!', 'Please fill out all required fields', 'error');
    }
  }

  onUpdate(): void {
    if (this.employeeForm.valid) {
      const updatedData = this.employeeForm.value;
      this.dialogRef.close(updatedData);
      Swal.fire('Success!', 'Employee Updated Successfully', 'success');
    }
    else {
      this.employeeForm.markAllAsTouched();
      Swal.fire('Error!', 'Please fill out all required fields', 'error');
    }
  }

  onSave(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
