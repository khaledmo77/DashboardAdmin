import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepresentativeDTO {
  name: string;
  address: string;
  governate: string;
  email: string;
  password: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class RepresentativeService {
  private baseUrl = 'http://www.pharmaatoncepredeploy.somee.com/api/Representative';

  constructor(private http: HttpClient) {}

  getAllRepresentatives(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/GetAllRepresentatives`);
  }

  createRepresentative(rep: RepresentativeDTO): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Outgoing payload:', rep);
    return this.http.post(`${this.baseUrl}/CreateRepresentative`, rep, { headers });
  }

  deleteRepresentative(id: number) {
    return this.http.delete(`${this.baseUrl}/DeleteRepresentative/${id}`);
  }
} 