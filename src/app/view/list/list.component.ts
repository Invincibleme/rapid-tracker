import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(private config: ConfigService) { }


  data: any;

  ngOnInit() {
    //this.show();
  }
  // show(){
  //   this.config.getUsers()
  //   .subscribe(result => {  
  //     this.data = result
  //     console.log(this.data);
  //   });
  // }

  

}
