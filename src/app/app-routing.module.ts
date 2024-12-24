import { NgModule } from '@angular/core';
import { RouterModule, Routes , ExtraOptions} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'description', component: DescriptionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
const routerOptions : ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
