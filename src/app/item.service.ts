import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/items`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/items/${id}`)
      .map((res) => res.json());
  }

  newItem(dataToSend) {
    return this.http.post(`${this.BASE_URL}/api/items`, dataToSend)
      .map((res) => res.json());
  }

  edit(item) {
    return this.http.put(`${this.BASE_URL}/api/items/${item.id}`, item)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/items/${id}`)
      .map((res) => res.json());
  }
}
