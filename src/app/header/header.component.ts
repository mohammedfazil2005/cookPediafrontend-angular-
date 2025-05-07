import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLoggedIN:boolean=false
  loggedUserName:string=""

  ngOnInit(){
    if(sessionStorage.getItem('token')){
      this.isLoggedIN=true
      let val=JSON.parse(sessionStorage.getItem("user")||"")
      this.loggedUserName=val.username

    }
  }

}
