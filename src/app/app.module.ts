import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './services/user.service';
import { WishlistService } from './services/wishlist.service';
import { CarrybagService } from './services/carrybag.service';
import { CarrybagOfferComponent } from './components/carrybag/carrybag-offer/carrybag-offer.component';
import { CarrybagHeaderComponent } from './components/carrybag/carrybag-header/carrybag-header.component';
import { WishlistOffersComponent } from './components/wishlist/wishlist-offers/wishlist-offers.component';
import { WishlistHeaderComponent } from './components/wishlist/wishlist-header/wishlist-header.component';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {path:'sidebar',component:SidebarComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'wishlist',component:WishlistOffersComponent},
  {path:'carrybag',component:CarrybagOfferComponent}
  //{path:'',redirectTo:'/sidebar' ,pathMatch:'full'},
  //{path:'**',redirectTo:'/sidebar' ,pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    SidebarComponent,
    WishlistOffersComponent,
    WishlistHeaderComponent,
    CarrybagOfferComponent,
    CarrybagHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
