import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAKtj0YKothW_PYazUNzdXxFLvUVOY0ESAObGDm3_i7YeWgCDubvUQ2WjevbFImp9_vhACUbdKEcbEoclU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

  }
}
