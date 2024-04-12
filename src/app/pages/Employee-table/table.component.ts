import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddEmployeeDialogComponent } from './add-employee-dialog/add-employee-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>( [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', dob: new Date(1980, 5, 15), gender: 'Male', education: 'matric', company: 'ABC Corp', experience: 5, package: '₹12.00L' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', dob: new Date(1985, 8, 20), gender: 'Female', education: 'matric', company: 'XYZ Inc', experience: 8, package: '₹15.00L' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson', email: 'michael@example.com', dob: new Date(1990, 2, 10), gender: 'Male', education: 'graduate', company: '123 Enterprises', experience: 3, package: '₹10.00L' },
    { id: 4, firstName: 'Emily', lastName: 'Brown', email: 'emily@example.com', dob: new Date(1975, 11, 5), gender: 'Female', education: 'diploma', company: 'EFG Corp', experience: 12, package: '₹20.00L' },
    { id: 5, firstName: 'David', lastName: 'Wilson', email: 'david@example.com', dob: new Date(1988, 7, 25), gender: 'Male', education: 'graduate', company: '456 Ltd', experience: 6, package: '₹14.00L' },
    { id: 6, firstName: 'Emma', lastName: 'Johnson', email: 'emma@example.com', dob: new Date(1992, 3, 8), gender: 'Female', education: 'intermediate', company: '789 Corp', experience: 4, package: '₹13.00L' },
    { id: 7, firstName: 'Michael', lastName: 'Brown', email: 'michael@example.com', dob: new Date(1983, 9, 12), gender: 'Male', education: 'graduate', company: 'XYZ Corp', experience: 9, package: '₹16.00L' },
    { id: 8, firstName: 'Sophia', lastName: 'Martinez', email: 'sophia@example.com', dob: new Date(1978, 6, 28), gender: 'Female', education: 'graduate', company: 'LMN Inc', experience: 7, package: '₹18.00L' },
    { id: 9, firstName: 'Matthew', lastName: 'Anderson', email: 'matthew@example.com', dob: new Date(1995, 1, 17), gender: 'Male', education: 'matric', company: '456 Enterprises', experience: 2, package: '₹11.00L' },
    { id: 10, firstName: 'Olivia', lastName: 'Garcia', email: 'olivia@example.com', dob: new Date(1987, 10, 30), gender: 'Female', education: 'intermediate', company: 'LMN Ltd', experience: 8, package: '₹17.00L' },
    { id: 11, firstName: 'James', lastName: 'Rodriguez', email: 'james@example.com', dob: new Date(1984, 4, 22), gender: 'Male', education: 'matric', company: 'ABC Inc', experience: 6, package: '₹15.00L' },
    { id: 12, firstName: 'Sophia', lastName: 'Davis', email: 'sophia@example.com', dob: new Date(1991, 12, 18), gender: 'Female', education: 'matric', company: '789 Corp', experience: 3, package: '₹12.00L' },
    { id: 13, firstName: 'Alexander', lastName: 'Martinez', email: 'alexander@example.com', dob: new Date(1989, 2, 6), gender: 'Male', education: 'graduate', company: 'EFG Ltd', experience: 10, package: '₹20.00L' },
    { id: 14, firstName: 'Isabella', lastName: 'Lopez', email: 'isabella@example.com', dob: new Date(1976, 7, 9), gender: 'Female', education: 'matric', company: 'LMN Corp', experience: 5, package: '₹14.00L' },
    { id: 15, firstName: 'Ethan', lastName: 'Hernandez', email: 'ethan@example.com', dob: new Date(1993, 11, 28), gender: 'Male', education: 'graduate', company: 'LMN Enterprises', experience: 8, package: '₹18.00L' },
]);
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


displayedColumns = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'education', 'company', 'experience', 'package', 'action', 'delete'];

openAddEmployeeDialog(rowData?: any): void {
  const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
    width: '800px',
    maxHeight: '500vh',
    data: rowData
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
      const newEmployeeId = this.dataSource.data.length + 1;
      result.id = newEmployeeId;
      this.dataSource.data.push(result);
      this.dataSource.paginator = this.paginator;
      Swal.fire('Success!', 'Employee Added Successfully', 'success');  
  });
}

openUpdateEmployeeDialog(rowData?: any): void {
  const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
    width: '800px',
    maxHeight: '500vh',
    data: rowData
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
      const index = this.dataSource.data.findIndex(item => item.id === result.id);
      this.dataSource.data[index] = result;
      this.dataSource._updateChangeSubscription();
      Swal.fire('Success!', 'Employee Updated Successfully', 'success');
  });
}

 





deleteRecord(id: number) {
  const index = this.dataSource.data.findIndex((element) => element.id === id);
  if (index !== -1) {
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
    Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
  } else {
    Swal.fire('Error!', 'Record not found.', 'error');
  }
}

confirmDelete(id: number) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.deleteRecord(id);
    }
  });
}


}
