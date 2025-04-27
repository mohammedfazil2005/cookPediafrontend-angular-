import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { ViewRecipeComponentComponent } from './view-recipe-component/view-recipe-component.component';
import { SavedRecipeComponentComponent } from './saved-recipe-component/saved-recipe-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {path:'',component:HomeComponentComponent},
    {path:'about',component:AboutComponentComponent,title:"About"},
    {path:'contact',component:ContactComponentComponent,title:"Contact"},
    {path:'login',component:LoginComponentComponent,title:"Login"},
    {path:'register',component:RegisterComponentComponent,title:"Register"},

    {path:'allrecipes',component:RecipeComponentComponent,title:"AllRecipes"},
    {path:'viewrecipe/:id',component:ViewRecipeComponentComponent,title:"ViewRecipes"},
    {path:'savedrecipes',component:SavedRecipeComponentComponent,title:"Savedrecipes"},
    {path:'profile',component:ProfileComponentComponent,title:"Profile"},
    {path:'**',component:ProfileComponentComponent,title:"pnf"}
];
