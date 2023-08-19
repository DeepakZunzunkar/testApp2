import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testApp2';
  base_URL ="http://localhost:8081";

  constructor(private _http: HttpClient) { }
  
  
  ngOnInit(): void {
    // this.loadData().subscribe((response: any) => {
    //   console.log("data",response);
    // },
    // (error: any) => {
    //   alert("Server side  Error..");
    // });

    

  }


  loadData() {

    // let UserAccessToken = localStorage.getItem('accessToken');
    let headerJson = {
      // 'Access-Control-Allow-Origin': '*',
      // 'userAccessToken': UserAccessToken
      "Content-type": "application/json"
    };
    let headersConfig = new HttpHeaders(headerJson);
    return this._http.get(this.base_URL, { headers: headersConfig});

  }


}
