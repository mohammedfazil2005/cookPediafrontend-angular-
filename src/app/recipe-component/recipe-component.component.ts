import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-component',
  imports: [NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './recipe-component.component.html',
  styleUrl: './recipe-component.component.css'
})
export class RecipeComponentComponent implements OnInit {
  recipeArray: any = []
  cuisineArray: any = []
  DummymealArray: any = []
  flatDummyArray:any=[]
  MealArray:any=[]
  dummyArray:any=[]
currentpage: string|number|undefined;
searchkey:string=""


  constructor(private api: ApiService,private router:Router) { }
  ngOnInit(): void {
    this.getRecipes()
  }
  getRecipes() {
    this.api.getAllRecipe().subscribe((res: any) => {
      this.recipeArray = res
      this.dummyArray=res

      this.recipeArray.forEach((a: any) => {
        !this.cuisineArray.includes(a.cuisine) && this.cuisineArray.push(a.cuisine)
      })

      this.DummymealArray = this.recipeArray.map((a: any) => a.mealType)
       this.flatDummyArray=this.DummymealArray.flat(Infinity)

       this.flatDummyArray.forEach((a:any)=>{
        !this.MealArray.includes(a)&&this.MealArray.push(a)
       })

       console.log(this.MealArray)



    })
  }
  

  filterRecipes(key:string,value:string){
    this.recipeArray=this.dummyArray.filter((a:any)=>a[key].includes(value))
  }

  viewRecipe(id:any){
    const token=sessionStorage.getItem('token')
    if(token){
      this.router.navigateByUrl(`viewrecipe/${id}`)
    }else{
      alert("Please Login to view recipe details!!")
    }
  }

}
