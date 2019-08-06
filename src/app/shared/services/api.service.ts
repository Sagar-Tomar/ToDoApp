import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Iitems {
  title: string;
  description: string;
  complete: boolean;
  _id: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) { }
  changeMessage(message: any) {
    this.messageSource.next(message);
  }
  addItemIncomplete(addItemForm) {
    return this.http.post("api/addItem", addItemForm)
  }

  getItemsIncomplete() {
    
    return this.http.get<Iitems[]>("api/getItems")
  }

  updateStatus(_id) {
    return this.http.post("api/updateStatus", {_id: _id} )
  }
}
