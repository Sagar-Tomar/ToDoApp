import { Component, OnInit } from '@angular/core';
import { ApiService, Iitems } from '../shared/services/api.service';


@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.css']
})
export class AddedItemComponent implements OnInit {
  incomplete: boolean = true;
  complete: boolean = false;

  itemsRef: Iitems[] = [];
  items: Iitems[];
  constructor(private api: ApiService) { }

  ngOnInit() {

    this.retrieveItems();

    this.api.currentMessage.subscribe(message => {
      if (message) {
        this.retrieveItems();
      }
    })
  }

  completeItem(_id){
    this.api.updateStatus(_id).subscribe(res => {
      this.retrieveItems();
    },error => {
    })
  }

  retrieveItems() {
    this.api.getItemsIncomplete().subscribe(res => {
      this.itemsRef = res;
      this.changeHappened();
    })
  }

  checkComChanged(ev) {
    this.changeHappened()

  }

  checkInComChanged(ev) {
    this.changeHappened()
  }
  changeHappened() {
    if (this.incomplete && this.complete) {
      this.items = this.itemsRef;
    } else if (this.incomplete) {
      this.items = this.itemsRef.filter(function (element, index, array) {
        return !(element.complete);
      });
    } else if (this.complete) {
      this.items = this.itemsRef.filter(function (element, index, array) {
        return (element.complete);
      })
    } else {
      this.items = []
    }
  }



}
