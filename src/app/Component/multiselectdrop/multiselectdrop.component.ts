import { Component, Input, OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-multiselectdrop',
  templateUrl: './multiselectdrop.component.html',
  styleUrls: ['./multiselectdrop.component.scss'],
})
export class MultiselectdropComponent implements OnInit,OnChanges {
  option: Array<{ name: string; val: string }> = [
    { name: 'India', val: "1" },
    { name: 'Australia', val: "2" },
    { name: 'Canada', val: "3" },
    { name: 'USA', val: "4" },
    { name: 'UK', val: "5" },
    { name: 'Bermuda', val: "6" },
    { name: 'France', val: "7" },
  ];
  open: boolean = false;
  checkArr: Array<any> = [];
  checkArrtwo: Array<any> = ["India","Australia"];
  @Input() value!: Array<any> ;
  @Input() readonly: boolean | undefined;
  constructor() {}
  ngOnChanges(){
    console.log("hi")
this.checkArr=this.value
  }
  ngOnInit(): void {}

  openDrop() {
    this.open = !this.open;
  }
  onEmptyarr(e: any) {
    console.log(e);

    if (e.target.checked) {
      this.checkArr.push(e.target.value);

      this.checkArrtwo.push(e.target.name);
    } else {
      let findid = this.checkArr.findIndex((x) => x === e.target.value);
      console.log(findid,e.target.value,this.checkArr);
      if (findid != -1) {
        this.checkArr.splice(findid, 1);
        this.checkArrtwo.splice(findid, 1);
      }
    }
  }
}
