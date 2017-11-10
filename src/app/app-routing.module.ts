import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import {ShopingListComponent} from './shoping-list/shoping-list.component';

import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RecipeDatabaseComponent} from './recipes/recipe-database/recipe-database.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full'} ,
  { path: 'recipe', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] } ,
    {path: ':id',  component: RecipesDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ]},
  { path: 'shoping-list', component: ShopingListComponent, data: { title: 'Shoping List' } },
  { path: 'recipe-database', component: RecipeDatabaseComponent, data: { title: 'recipe-database' } },
  {path: 'singin', component: SigninComponent},
  {path: 'singup', component: SignupComponent},
  {path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/not-found', data :{message: 'Not Found'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
