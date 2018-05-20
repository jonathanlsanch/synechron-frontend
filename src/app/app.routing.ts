import { Routes } from '@angular/router';

import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { NewItemComponent } from './components/new-item/new-item.component';

export const routes: Routes = [
    { path: '', component: ItemsListComponent },
    { path: 'item/:id', component: ItemDetailsComponent },
    {path: "add-item", component: NewItemComponent},
    { path: '**', redirectTo: '' }
];
