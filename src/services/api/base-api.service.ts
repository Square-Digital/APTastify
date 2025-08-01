import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private baseUrl: string = '';

  constructor(
    private http: HttpClient,
  ) {
    // Get the base URL from configuration
    this.baseUrl = 
    console.log('Base URL:', this.baseUrl);
  }

  // GET request
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get<T>(url, { params });
  }

  // POST request
  post<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post<T>(url, data, { headers });
  }

  // PUT request
  put<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.put<T>(url, data, { headers });
  }

  // PATCH request
  patch<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.patch<T>(url, data, { headers });
  }

  // DELETE request
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.delete<T>(url);
  }

  // Helper method to build URL with parameters
  buildUrl(endpoint: string, params?: Record<string, string | number>): string {
    let url = `${this.baseUrl}${endpoint}`;

    if (params) {
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        queryParams.append(key, value.toString());
      });
      url += `?${queryParams.toString()}`;
    }

    return url;
  }
}
