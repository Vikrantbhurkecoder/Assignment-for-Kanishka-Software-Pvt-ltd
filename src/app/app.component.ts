import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentPage: any;
  loggedIn() {
    if (localStorage.getItem('admin_tc_token') || localStorage.getItem('tpa_tc_token') || localStorage.getItem('hospital_tc_token')) {
      return true;
    } else {
      return false;
    }
  }
  title = 'all-page';
}
