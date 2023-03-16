import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }
  postitem(data: any) {
    return this.http.post<any>("http://localhost:3000/assets/", data)
  }
  getItem() {
    return this.http.get("http://localhost:3000/assets/")
  }
  putItem(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/assets/" + id, data)
  }
  deleteItem(id: number) {
    return this.http.delete("http://localhost:3000/assets/" + id)
  }
}
