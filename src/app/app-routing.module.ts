import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent }  from './hero-list/hero-list.component';
import { Text1Component } from './text1/text1.component'
import { Text2Component } from './text2/text2.component'
import { Text3Component } from './text3/text3.component'
const routes: Routes = [
  {path:'hero-list',component:HeroListComponent},
  {path:'text1',component:Text1Component},
  {path:'text2',component:Text2Component},
  {path:'text3',component:Text3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
