import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Datos } from '../Models/datos';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private url = 'https://mindicador.cl/api'


  constructor(private http: HttpClient) { }

  public getService() {
    return this.http.get(this.url, { observe: 'response' });
  }
}