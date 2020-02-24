import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ar = [1, 2, 3, 4];
  @Input() id: number;
  // @Output() clickedEvent = new EventEmitter<boolean>();
  isShow: boolean = true;
  // clicked: boolean = false;

  btn(value) {
    // if (value == this.id) {
    this.isShow = false;
    // }
    // this.clickedEvent.emit(!this.isShow);

  }

}
