import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MhospitalModel } from 'src/app/model/hospital.model';
import { DbservicesService } from 'src/app/services/dbservices.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  sub!: Subscription;
  name!: MhospitalModel;

  constructor(public dbService: DbservicesService) { }

  ngOnInit(): void {
    this.dbService.getHospitalList();
  }

  onClickOrg(code: string) {
    if (code != null) {
      this.dbService.getOrg(code);
    }
  }
}
