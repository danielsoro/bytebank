import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private _transferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private readonly httpClient: HttpClient) {
    this._transferencias = [];
  }

  get transferencias(): Transferencia[] {
    return this._transferencias;
  }

  findAll(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  create(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, {
      ...transferencia,
      data: new Date(),
    });
  }
}
