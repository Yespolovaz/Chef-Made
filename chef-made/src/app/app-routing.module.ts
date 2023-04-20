import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CategoriesComponent} from "./categories/categories.component";
import {RecipesComponent} from "./recipes/recipes.component";

const routes: Routes = [
  {
    path:'home',
    component: WelcomePageComponent
  },
  {
    path:'about',
    component: AboutComponent

  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:categoryId',
    component: RecipesComponent
  },
  {
    path: '',
    redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
