import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = `${environment.url}/api`

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post<any>(`${this.url}/logi`, { email, password });
  }

}
