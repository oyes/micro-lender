import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private customerService) { }

  ngOnInit() {
  }

}