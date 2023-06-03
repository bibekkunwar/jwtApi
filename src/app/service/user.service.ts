import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://blog-api-django-rest-framework-production.up.railway.app/api/v1/login/";
  private profileUrl = "https://blog-api-django-rest-framework-production.up.railway.app/api/v1/list/";

  outcome: any;

  constructor(private http: HttpClient, private router:Router) { }


  login(data:any){
    this.http.post(this.url, data)
    .subscribe((result: any) => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/profile']);
      alert("logged in successfully");
    })
  }
  profile(){
    let headers = new HttpHeaders()
    .set("Authorization", `bearer ${localStorage.getItem('token')}`)
    this.outcome = this.http.get(this.profileUrl, {headers})
    .subscribe((result: any) => {
      localStorage.setItem("token", result.token);
      this.router.navigate(['/profile']);
    })
  }

  getposts(){
    return this.http.get('https://blog-api-django-rest-framework-production.up.railway.app/api/v1/list/');
  }
}
