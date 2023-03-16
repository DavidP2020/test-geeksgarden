import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SparepartsService {
  constructor(private http: HttpClient) { }
  postitem(data: any) {
    return this.http.post<any>("http://localhost:3000/spareparts/", data)
  }
  getItem() {
    return this.http.get("http://localhost:3000/spareparts/")
  }
  putItem(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/spareparts/" + id, data)
  }
  deleteItem(id: number) {
    return this.http.delete("http://localhost:3000/spareparts/" + id)
  }
}
