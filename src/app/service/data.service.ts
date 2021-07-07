import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  //USER
  getUser(id: string, auth_token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${auth_token}`
        })
      };
    return this.http.get(`http://localhost:3000/users/${id}`, httpOptions);
  }  
  putUser(id: string, body: any, auth_token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${auth_token}`
        })
      };
    return this.http.put(`http://localhost:3000/users/${id}`, body, httpOptions);
  } 
  postLogin(body: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json'
        })
    };
    return this.http.post(`http://localhost:3000/login`, body, httpOptions);
  } 
  
  getAllUser(auth_token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${auth_token}`
        })
      };
    return this.http.get(`http://localhost:3000/users`, httpOptions);
  }
  

  //QUEST
  getQuest(){
    return this.http.get(`http://localhost:3000/quests`);
  }
  getQuestbyId(id: string){
    return this.http.get(`http://localhost:3000/quest/${id}`);
  }
  putQuest(id: string, body: any){
    return this.http.put(`http://localhost:3000/quest/${id}`, body);
  }  
  postQuest(body: any){
    return this.http.post(`http://localhost:3000/quest/`, body);
  } 
  deleteQuest(id: number){
    return this.http.delete(`http://localhost:3000/quest/${id}`);
  } 

  //PRODUCT
  getProducts(){
    return this.http.get(`http://localhost:3000/Products`);
  }
  getProductbyId(id: string){
    return this.http.get(`http://localhost:3000/Product/${id}`);
  }
  putProduct(id: string, body: any){
    return this.http.put(`http://localhost:3000/Product/${id}`, body);
  }  
  postProduct(body: any){
    return this.http.post(`http://localhost:3000/Product/`, body);
  } 
  deleteProduct(id: number){
    return this.http.delete(`http://localhost:3000/Product/${id}`);
  } 
  
}
