import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {CreateComponent} from "./create/create.component";
import {SignComponent} from "./sign/sign.component";
import {SignedGuard} from "./signed.guard";
import {NotSignedGuard} from "./not-signed.guard";

const routes: Routes = [
  {path:'', component:PostsComponent},
  {path:'posts', redirectTo:""},
  {path:'posts/:id', component:PostsComponent},
  {path:'create', component:CreateComponent, canActivate:[SignedGuard]},
  {path:'login', component:SignComponent, canActivate:[NotSignedGuard]},
  {path:'**', redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
