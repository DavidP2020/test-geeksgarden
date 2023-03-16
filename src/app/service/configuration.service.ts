import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private http: HttpClient) { }
  postitem(data: any) {
    return this.http.post<any>("http://localhost:3000/configuration/", data)
  }
  getItem() {
    return this.http.get("http://localhost:3000/configuration/")
  }
  putItem(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/configuration/" + id, data)
  }
  deleteItem(id: number) {
    return this.http.delete("http://localhost:3000/configuration/" + id)
  }
}
