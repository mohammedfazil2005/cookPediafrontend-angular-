import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [ReactiveFormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})
export class RegisterComponentComponent {
  registerForm:FormGroup

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
    this.registerForm=fb.group({
      username:['',[Validators.required,Validators.pattern("[a-zA-B0-9]*")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onRegister(){
    if(this.registerForm.valid){
     const username=this.registerForm.value.username
     const email=this.registerForm.value.email
     const password=this.registerForm.value.password

     this.api.RegisterUser({username,email,password}).subscribe({
      next:(res:any)=>{
        alert(`Successfully Registered,Welcome ${res.username}`)
        this.router.navigateByUrl('/login')
        this.registerForm.reset()
      },
      error:(reason:any)=>{
        alert(reason.error)
        this.registerForm.reset()
      }
     })
     
    }else{
      alert("Invalid from")
    }
  }


}
