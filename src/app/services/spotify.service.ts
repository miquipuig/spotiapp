import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAdhE-VWrfFxi-xqUHhZfcN3CkME_8mKpQulOI0I_3ob0ZIKZHvvkkkS_n09ICbRC8xN_zEhfFshopovEI'
    });
  
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
      .subscribe(data => {
          console.log(data);
      });
  }
}
