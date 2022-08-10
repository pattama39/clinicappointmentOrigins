import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ConstantService } from './constant.service';
import { Observable } from 'rxjs';
import { StaffModel } from './../model/staff.model';
import { MhospitalModel } from './../model/hospital.model';
import { BranchModel } from './../model/branch.model';


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
  hospital!: MhospitalModel[];
  branch!: BranchModel[];

  // Method สำหรับการเช็ค Login
  getDoctorList() {
    this.http.get(`${this.constant.baseAPIURL+ 'Staff'}/demopair01`)
    .toPromise()
    .then(res =>this.list = res as StaffModel[]);
  }

  getHospitalList() {
    this.http.get(this.constant.demoAPIURL+ 'DB')
    .toPromise()
    .then(res =>this.hospital = res as MhospitalModel[]);
  }

  getOrg(code: string) {
    const myparams = {
      'hospitalCode': code
    };

    this.http.get(`${this.constant.demoAPIURL+ 'Organization'}/${code}`, { params: myparams })
    .toPromise()
    .then(res =>this.branch = res as BranchModel[]);
  }
}
