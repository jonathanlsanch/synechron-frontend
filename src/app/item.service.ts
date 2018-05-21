import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '.././environments/environment';

@Injectable()
export class ItemService {
  // BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.apiBase}/api/items`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${environment.apiBase}/api/items/${id}`)
      .map((res) => res.json());
  }

  newItem(dataToSend) {
    return this.http.post(`${environment.apiBase}/api/items`, dataToSend)
      .map((res) => res.json());
  }

  editItem(id, updates) {
    return this.http.put(`${environment.apiBase}/api/items/${id}`, updates)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${environment.apiBase}/api/items/${id}`)
      .map((res) => res.json());
  }
}
