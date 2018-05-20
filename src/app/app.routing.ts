import { Routes } from '@angular/router';

import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsListComponent } from './items-list/items-list.component';

export const routes: Routes = [
    { path: '', component: ItemsListComponent },
    { path: 'item/:id', component: ItemDetailsComponent },
    { path: '**', redirectTo: '' }
];