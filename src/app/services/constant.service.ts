import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  // กำหนด path ของ URL สำหรับเรียก API ไว้ที่นี้
  baseAPIURL =  "https://gate.izpalapp.com/apapi/";//"http://203.150.107.222:5001/api/"
  demoAPIURL =  "https://localhost:44313/api/"

  constructor() { }
}
