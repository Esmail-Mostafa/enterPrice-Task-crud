import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IResponse } from 'src/app/core/interFace/IResponse';
import { UesrDEtalis } from 'src/app/core/interFace/Iuser';
import { UserService } from 'src/app/core/service/user.service';
import { Iusers } from 'src/app/core/interFace/Iuser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [MessageService],
})
export class UsersComponent implements OnInit {
  users: UesrDEtalis[] = [];
  pageSize: number = 5;
  pageNum: number = 0;
  totalCount!: number;
  constructor(
    private _UserService: UserService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getAllUSer();
  }

  // In this case, I have two options: either I can implement the function on
  // the server side or on the client side. I chose the client side because
  //it performs better in terms of performance.
  getAllUSer() {
    const body: Iusers = {
      filter: {
        // id: 0,
        // firstName: '',
        // lastName: '',
        // password: '',
        // email: '',
        // creationDate: '',
        // deleteStatus: 0
      },
      sorting: {
        // column: 'string',
        // direction: 'string',
        // sortingDirection: 0,
      },
      paginator: {
        page: this.pageNum,
        pageSize: this.pageSize,
      },
    };
    this._UserService.GEtALL(body).pipe(
      takeUntilDestroyed()
    ).subscribe((res) => {
      this.users = res.dataList;
      this.totalCount = res.totalCount;
    });
  }
  onPageChange(page: any) {
    this.pageNum = page.page;
    console.log(this.pageNum);
    const body: Iusers = {
      filter: {},
      sorting: {},
      paginator: {
        page: page.page,
        pageSize: this.pageSize,
      },
    };
    this._UserService.GEtALL(body).pipe(
      takeUntilDestroyed()
    ).subscribe((res) => {
      console.log(res);

      this.users = res.dataList;
      this.totalCount = res.totalCount;
    });
  }
  Delete(UserID: number) {
    this._UserService.DeleteUSer(UserID).pipe(
      takeUntilDestroyed()
    ).subscribe({
      next: (value: IResponse) => {
        if (value.result == true) {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: value.message,
          });
          this.getAllUSer();
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
