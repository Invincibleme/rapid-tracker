import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor( private modalService: NgbModal, protected http: HttpClient, protected config:ConfigService) { }

  @ViewChild("l") form: NgForm;
  onSubmit(){
    console.log(this.form);
    console.log(this.form.value);
    const data = this.form.value;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.config.post(data, options)
    .subscribe(
      (response)=>console.log(response),
      (error)=> console.log(error)
    );
  }
  @ViewChild("f") form1: NgForm;
  onSubmitFound(){
    console.log(this.form1);
    console.log(this.form1.value);
    const data = this.form1.value;
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.config.postfound(data, options)
    .subscribe(
      (response)=>console.log(response),
      (error)=> console.log(error)
    );
  }

  

  
  
  lostmodal(lost) {
    this.modalService.open(lost, {ariaLabelledBy: 'lost'})
  }

  foundmodal(found) {
    this.modalService.open(found, {ariaLabelledBy: 'found'})
  }
 
  // onSubmit(form:NgForm){
  //   console.log(form);
  // }
    
}
