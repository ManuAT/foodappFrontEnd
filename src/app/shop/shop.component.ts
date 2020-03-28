import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  list : any ;

  constructor(
    public common : CommonService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.common.getDetailsOrder().subscribe(result=>{
      console.log("oder details",result);
      this.list = result;
    })
  }

}
