import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IResponse } from 'src/app/core/interFace/IResponse';
import { UesrDEtalis } from 'src/app/core/interFace/Iuser';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [MessageService],
})
export class UpdateComponent implements OnInit {
  FormDAta!: FormGroup;
  id!: number;
  UserDEtalis!: UesrDEtalis;

  constructor(
    private _UserService: UserService,
    private _FormBuilder: FormBuilder,
    private messageService: MessageService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = JSON.parse(this._ActivatedRoute.snapshot.paramMap.get('id')!);
    this.GetUserDetalis(this.id);

    this.FormDAta = this._FormBuilder.group({
      id: [this.id],
      firstName: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      creationDate: ['', [Validators.required]],
    });
  }
  GetUserDetalis(id: number) {
    this._UserService.USerDEtalis(id).subscribe((res) => {
      this.UserDEtalis = res.result;

      this.FormDAta.patchValue({
        firstName: this.UserDEtalis.firstName,
        lastName: this.UserDEtalis.lastName,
        email: this.UserDEtalis.email,
        password: this.UserDEtalis.password,
        creationDate: this.UserDEtalis.creationDate,
      });
    });
  }

  UpdateUSer() {
    this._UserService.update(this.FormDAta.value).pipe(
      takeUntilDestroyed()
    ).subscribe({
      next: (value: IResponse) => {
        if (value.result == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: value.message ,
          });
          this.GetUserDetalis(this.id);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: value.message,
          });
        }
      },
    });
  }

}
