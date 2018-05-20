import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [ItemService]
})

export class ItemDetailsComponent implements OnInit {
  item: any;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getItemDetails(params['id']);
    });
  }

  getItemDetails(id) {
    this.itemService.get(id)
      .subscribe((item) => {
        this.item = item;
      });
  }
}
