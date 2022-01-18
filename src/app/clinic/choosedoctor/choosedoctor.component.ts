import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subscription } from 'rxjs';
import { StaffModel } from 'src/app/model/staff.model';
import { DbservicesService } from './../../services/dbservices.service';

@Component({
  selector: 'app-choosedoctor',
  templateUrl: './choosedoctor.component.html',
  styleUrls: ['./choosedoctor.component.scss']
})
export class ChoosedoctorComponent implements OnInit {
  sub!: Subscription;
  name!: StaffModel;

  constructor(private http: HttpClient, public dbService: DbservicesService) { }

  ngOnInit(): void {
    this.dbService.getDoctorList();
  }

  // getDoctor(){

  //   this.sub = this.dbService.GetDoctor().subscribe(
  //     (staff) => {

  //       this.name = staff.displayName;

  //     }
  //   );
  // }
}


