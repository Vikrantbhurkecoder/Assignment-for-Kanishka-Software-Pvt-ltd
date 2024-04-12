
import { Chart } from 'node_modules/chart.js';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerables } from 'chart.js';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';;
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './pages/Employee-table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { PackageFormatPipe } from './package-format.pipe';
import { AddEmployeeDialogComponent } from './pages/Employee-table/add-employee-dialog/add-employee-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PackageFormatPipe,
    AddEmployeeDialogComponent,
  ],
  imports: [
      MatSelectModule,
      MatRadioModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatDialogModule,
      MatPaginatorModule,
      MatButtonModule,
      MatTableModule,
      MatTableModule,
      BrowserModule,
      AppRoutingModule,
      MatPaginatorModule,
      AccordionModule,
      MatFormFieldModule,
      MatInputModule,
      ButtonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatIconModule,
 ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
