import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) {
    

   }
  createLogin(phone,password,department,details){
    return this.http.post('http://localhost:8080/api/login',{phone,password,department,details})
  } 

  createOrder(orederNo,stockNo,shopNo,qundity,phone){
    return this.http.post('http://localhost:8080/api/order',{orederNo,stockNo,shopNo,qundity,phone})
  } 
  
  getDetailsLogin(phone){
    return this.http.get('http://localhost:8080/api/login',{params:{phone}})
  }

  getDetailsOrder(){
    return this.http.get('http://localhost:8080/api/login')
  }
   getDetailsStock(){
    return this.http.get('http://localhost:8080/api/stock')
  }
}
