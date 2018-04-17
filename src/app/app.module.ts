import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShoppingItemsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
