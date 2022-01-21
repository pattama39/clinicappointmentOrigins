import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BranchModel } from 'src/app/model/branch.model';
import { DbservicesService } from 'src/app/services/dbservices.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  sub!: Subscription;
  name!: BranchModel;
  code!: string | null;

  constructor(private route: ActivatedRoute, public dbService: DbservicesService) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('hospitalCode');
    this.dbService.getOrg(this.code || 'null');
  }
}
