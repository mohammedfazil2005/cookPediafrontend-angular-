import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  loginForm:FormGroup

  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){
    this.loginForm=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onLoginn(){
    if(this.loginForm.valid){
      const email=this.loginForm.value.email
      const password=this.loginForm.value.password

      this.api.LoginUser({email,password}).subscribe({
        next:(res:any)=>{
          sessionStorage.setItem("token",res.token)
          sessionStorage.setItem("user",JSON.stringify(res.user))
          this.loginForm.reset()
          if(res.user.userType=="user"){
            this.router.navigateByUrl('/')
          }else{

          }
        },
        error:(reason:any)=>{
          alert(reason.error)
        }
      })



    }else{
      alert("All fields are required!")
    }
  }

  



}
