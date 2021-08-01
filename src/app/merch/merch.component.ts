import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  title = 'angularbootstrap';

  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#sidebarToggle").click(function(e: any) {
      e.preventDefault();
      $("#merch-wrapper").toggleClass("sb-sidenav-toggled");
    });
  }

}
