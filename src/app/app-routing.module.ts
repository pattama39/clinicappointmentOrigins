import { BranchComponent } from './clinic/branch/branch.component';
import { HistoryappointmentComponent } from './clinic/historyappointment/historyappointment.component';
import { ChoosedoctorComponent } from './clinic/choosedoctor/choosedoctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewappointmentComponent } from './clinic/newappointment/newappointment.component';
import { HospitalComponent } from './clinic/hospital/hospital.component';

const routes: Routes = [
  { path:'', component: HospitalComponent, },
  { path: ':hospitalCode/branch', component: BranchComponent },
  { path: 'historyappointment', component: HistoryappointmentComponent },
  { path: 'choosedoctor', component: ChoosedoctorComponent },
  { path: 'newappointment', component: NewappointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
