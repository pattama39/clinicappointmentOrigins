import { OrganizComponent } from './clinic/organiz/organiz.component';
import { HistoryappointmentComponent } from './clinic/historyappointment/historyappointment.component';
import { ChoosedoctorComponent } from './clinic/choosedoctor/choosedoctor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewappointmentComponent } from './clinic/newappointment/newappointment.component';

const routes: Routes = [

    { path: '',
    component: OrganizComponent },
    { path: 'historyappointment',
    component: HistoryappointmentComponent },
    { path: 'choosedoctor',
    component: ChoosedoctorComponent },
    { path: 'newappointment',
    component: NewappointmentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
