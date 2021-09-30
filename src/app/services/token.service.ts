import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 
  constructor() { }

  saveToken(token) {
    localStorage.setItem('dicomline_token', token)
  }

  clearToken() {
    localStorage.removeItem('dicomline_token')
  }

  getToken() {
    return localStorage.getItem('dicomline_token') || false
  }


  

 

}
