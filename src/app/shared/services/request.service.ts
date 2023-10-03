import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// ====== CLASSE GENÉRICA DE REQUISIÇÕES DOS SERVIÇOS =====

export class RequestService {

  private header!: HttpHeaders;
  private apiUrl: string;
  token: any;

  constructor(
    public http: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl
  }


  // Trata o retorno do GET
  private extractData(res: any) {
    try {
      return res || {}
    } catch (e) {
      return null
    }
  }

  // Retorno do erro
  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

  // Get
  public get(endpoint: string, params = {}, id?: string): Observable<any> {
    return this.http.get(
      id ? `${this.apiUrl}${endpoint}${id}` : `${this.apiUrl}${endpoint}`,
      { headers: this.header, params }
    )
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError))
  }

  // Post
  public post(endpoint: string, postObject: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${endpoint}`,
      postObject,
      { headers: this.header }
    )
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError))
  }

  // Put
  public put(endpoint: string, id: string | number, postObject: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${endpoint}`,
      postObject,
      { headers: this.header }
    )
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError))
  }

  // Delete
  public delete(endpoint: string, id: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${endpoint}`,
      { headers: this.header }
    )
      .pipe(map(this.extractData))
      .pipe(catchError(this.handleError))
  }

  // Chamada generica dos serviços
  public genericRequest(type: string, endpoint: string, data: any): Observable<any> {
    let options = {
      body: data,
      headers: this.header
    }
    return this.http.request(type, endpoint, options)
  }

}
