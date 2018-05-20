import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemService } from './item.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
