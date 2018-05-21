import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
  providers: [ItemService]
})
export class EditItemComponent implements OnInit {

item = <any>{};

public updatedItem: Object = {};
public name: String;
public description: String;
public price: String;
public rating: String;
public seller: String;
public warranty: String;

saveError = '';

constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.getItemDetails(params['id']);
  });
}
// getting one story and its details
   getItemDetails(id) {
     this.itemService.get(id)
       .subscribe((item) => {
         this.item = item;
       });
   }

doTheUpdate(id, formData) {
     const formInfo = formData.form.controls;
     console.log('=============== formData: ', formInfo.category);
     this.name = formInfo.name.value;
     this.description = formInfo.description.value;
     this.price = formInfo.price.value;
     this.rating = formInfo.rating.value;
     this.seller = formInfo.seller.value;
     this.warranty = formInfo.warranty.value;
     this.sendUpdatesToApi(id);
}

sendUpdatesToApi(id) {
     this.updatedItem = {
       name: this.item.name,
       description: this.item.description,
       price: this.item.price,
       rating: this.item.rating,
       seller: this.item.seller,
       warranty: this.item.warranty
  };
  console.log("edits:", this.updatedItem);
  this.itemService.editItem(id, this.updatedItem)
    .toPromise()
    .then(() => {
      this.router.navigate(['/products']);
    })
    .catch();
}

    deleteItem() {
       if (window.confirm('Are you sure?')) {
         this.itemService.remove(this.item._id)
           .subscribe(() => {
             this.router.navigate(['']);
           });
         }
     }
 }
