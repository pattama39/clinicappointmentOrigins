
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConstantService } from './constant.service';
import { Observable } from 'rxjs';
import { StaffModel } from './../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  }

  constructor(private http: HttpClient, private constant: ConstantService) { }

  list!: StaffModel[];

  // Method สำหรับการเช็ค Login
  getDoctorList() {
    this.http.get(this.constant.baseAPIURL+ 'Staff')
      .toPromise()
      .then(res =>this.list = res as StaffModel[]);
  }

}
