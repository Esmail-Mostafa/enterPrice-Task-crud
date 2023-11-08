import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ApiUrls  from '../configuration/configuration';
import { Iusers, UesrDEtalis, userRes } from '../interFace/Iuser';
import { IResponse } from '../interFace/IResponse';
import { Detalis } from '../interFace/IDetalis';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  GEtALL(Data: Iusers): Observable<userRes> {
    return this.http.post<userRes>(ApiUrls.BaseURL + ApiUrls.User.GetALL, Data);
  }
  AddUser(Data: any): Observable<IResponse> {
    return this.http.post<IResponse>(ApiUrls.BaseURL + ApiUrls.User.AddUser, Data);
  }
  DeleteUSer(Data: number): Observable<IResponse> {
    return this.http.delete<IResponse>(ApiUrls.BaseURL + ApiUrls.User.Delete +`?id=${Data}` );
  }
  USerDEtalis(Data: number): Observable<Detalis> {
    return this.http.get<Detalis>(ApiUrls.BaseURL + ApiUrls.User.GetById +`?id=${Data}`  );
  }
  update(Data: any): Observable<IResponse> {
    return this.http.put<IResponse>(ApiUrls.BaseURL + ApiUrls.User.Update, Data);
  }
}
