import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  private apiUrl = 'https://early-sites-deny.loca.lt/getstats';  // API URL

  constructor(private http: HttpClient) { }

  // Method to fetch video data
  getVideoData(): Observable<any> {
      const headers = new HttpHeaders({
      'Bypass-Tunnel-Reminder': 'true'
    });
    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      map(response => {
        // You can transform or process data here if needed
        return response
      })
    );
  }
  getBmsDetails(): Observable<any> {
    const headers = new HttpHeaders({
    'Bypass-Tunnel-Reminder': 'true'
  });
  return this.http.get<any>('https://fast-ghosts-worry.loca.lt', { headers }).pipe(
    map(response => {
      // You can transform or process data here if needed
      return response
    })
  );
}
}
