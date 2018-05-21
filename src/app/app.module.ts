import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ItemService } from './item.service';

// routes
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    NewItemComponent,
    EditItemComponent,
    HomeComponent
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
