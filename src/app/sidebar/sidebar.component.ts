import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
  name = sessionStorage.getItem('username')
  role = sessionStorage.getItem('role')
  ngOnInit(): void {
  }

  public logOut() {
    sessionStorage.clear()
    this.router.navigate(['login'])
    window.location.reload()
  }
}
