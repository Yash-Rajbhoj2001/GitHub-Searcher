import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {SearchpageComponent} from './components/searchpage/searchpage.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
const routes: Routes = [
{
   path: '',
   component: HomeComponent
},
{
    path : 'searchuser',
    component: SearchpageComponent
},
{
   path : 'user/:id',
   component: UserDetailPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
