import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  cars: any;

  selectedCar: any;

  displayDialog: boolean;

  sortOptions = new Array();

  sortKey: string;

  sortKeyPrimary: String;

  sortField: string;

  sortOrder: number;

  keysObj = new Array();

  //keysObjSec = new Array();

  sortValue = new Array();

  sortPrimaryOption: any;

  primarySortField: any;

  temp: any;

  constructor() { }

  ngOnInit() {

    this.cars = [
      { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
      { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
    ];
    this.temp = this.cars;
    this.getAllKeys();
    console.log(this.keysObj);
    this.sortPrimaryOption = [
      { label: this.keysObj[0], value: this.sortValue[0] },
      { label: this.keysObj[1], value: this.sortValue[1] },
      { label: this.keysObj[2], value: this.sortValue[2] }
    ];

  }

  selectCar(event: Event, car: any) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onPrimarySortChange(event: HTMLInputElement){
    this.cars = this.temp;
    let keysObjSec = new Array();
    // this.keysObjSec = null;
    this.sortOptions = [];
    this.primarySortField = event.value;
    let newArray =this.cars.sort(this.predicateBy(this.primarySortField));
    var prop = event.value;
    console.log(newArray);

    newArray.forEach(element => {
      console.log(element[prop]);
      keysObjSec.push(element[prop]);
    });

    
    // let unique = this.keysObjSec.filter(function(elem, index, self) {
    //   return index === self.indexOf(elem);
    // })

    // console.log(unique);

    keysObjSec.forEach(el =>{
      this.sortOptions.push({label:el, value: el});
    });

    console.log(this.sortOptions);

    // this.sortOptions = [
    //   { label: this.keysObjSec, value: this.keysObjSec },
    //   { label: this.keysObjSec, value: this.keysObjSec },
    //   { label: this.keysObjSec, value: this.keysObjSec }
    // ];
  }

  onSortChange(event) {
    this.cars = this.temp;
    let sortedList = [];
    let value = event.value;
    console.log(value);
    this.cars.forEach(el => {
      if (value == el[this.primarySortField]){
        sortedList.push(el);
      }
    });
     this.cars = sortedList;
     console.log(sortedList);


    // console.log(value);

    // this.sortField = value;

    // if (value.indexOf('!') === 0) {
    //   this.sortOrder = -1;
    //   this.sortField = value.substring(1, value.length);
    // }
    // else {
    //   this.sortOrder = 1;
    //   this.sortField = value;
    // }
  }

  onDialogHide() {
    this.selectedCar = null;
  }

  capitalizeFirstLetter( word : String){
    let firstLetter = word.charAt(0).toUpperCase();
    return firstLetter + word.slice(1);
  }

  getAllKeys(){
    let capsWord: String;
    for (let k in this.cars[0]) {
      this.sortValue.push(k);
      capsWord = this.capitalizeFirstLetter(k);
      this.keysObj.push(capsWord);
    }
  }

  predicateBy(prop:any){
    console.log(prop);
    return function(a,b){
       if( a[prop] > b[prop]){
           return 1;
       }else if( a[prop] < b[prop] ){
           return -1;
       }
       return 0;
    }
 }
}
