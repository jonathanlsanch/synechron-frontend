import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemService]
})
export class ItemsListComponent implements OnInit {
  items;

  constructor(private item: ItemService) { }

  ngOnInit() {
    this.item.getList()
      .subscribe((items) => {
        this.items = items;
      });
  }
}
