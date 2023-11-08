import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IResponse } from 'src/app/core/interFace/IResponse';
import { UserService } from 'src/app/core/service/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [MessageService],
})
export class AddComponent {
  FormDAta!: FormGroup;

  constructor(
    private _UserService: UserService,
    private _FormBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.FormDAta = this._FormBuilder.group({
      firstName: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      creationDate: ['', [Validators.required]],
    });
  }

  AddUser() {
    this._UserService.AddUser(this.FormDAta.value).pipe(
      takeUntilDestroyed()
    ).subscribe({
      next: (value: IResponse) => {
        if (value.result == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: value.message,
          });
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
