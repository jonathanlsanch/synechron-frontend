import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../../item.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  itemData = {
    name: "",
    description: "",
    price: "",
    rating: "",
    seller: "",
    warranty: ""
  };

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }


  ngOnInit() {
  }

  newItem(myForm) {
    console.log(myForm.value);
    this.itemService.newItem(myForm.value)
    .subscribe(res => {
      console.log('item successfully created!');
      // this.entryForm.content = myForm.value.content;
      // this.entryForm.title = myForm.value.title;
    });
  }


}
