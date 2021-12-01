import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
const routes: Routes = [ 
  {
  path:"",
  component: HomePageComponent
  },
  {
    path:'resturant/:id',
    component: ShoppingPageComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:"thankyou",
    component: ThankYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
