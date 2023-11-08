import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { UesrDEtalis } from 'src/app/core/interFace/Iuser';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-user-detalis',
  templateUrl: './user-detalis.component.html',
  styleUrls: ['./user-detalis.component.scss'],
})
export class UserDetalisComponent implements OnInit {
  id!: number;
  UserDEtalis!: UesrDEtalis;
  constructor(
    private _UserService: UserService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = JSON.parse(this._ActivatedRoute.snapshot.paramMap.get('id')!);
    this.GetUserDetalis(this.id);
  }
  GetUserDetalis(id: number) {
    this._UserService.USerDEtalis(id).pipe(
      takeUntilDestroyed()
    ).subscribe((res) => {
      this.UserDEtalis = res.result;
    });
  }
}
