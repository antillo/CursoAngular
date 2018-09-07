import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    NavbarComponent,
    ListItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
