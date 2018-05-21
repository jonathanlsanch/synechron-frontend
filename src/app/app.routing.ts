import { Routes } from '@angular/router';

import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ItemsListComponent },
    { path: 'products/item/:id', component: ItemDetailsComponent },
    { path: 'add-item', component: NewItemComponent },
    { path: 'edit/:id', component: EditItemComponent }
];
