import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAbf-ZsuDrZaeFXUrIxcJBLQSJzhbQ-S5fZK4a3tJKhEmD7RRmRGo8vOsf5Jy9xK0jZAnD4ODsXWd0-pnc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQAbf-ZsuDrZaeFXUrIxcJBLQSJzhbQ-S5fZK4a3tJKhEmD7RRmRGo8vOsf5Jy9xK0jZAnD4ODsXWd0-pnc'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&offset=0&limit=20`, {headers});

  }

}
