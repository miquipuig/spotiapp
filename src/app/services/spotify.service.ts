import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery( query: string) {
    const url: string = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAqMxT9ElQmOvymp0cA8Tsi8_cXBkU1eUr7Ks2AlVLHR66As28AxL87Zg4sWlM9Kh0Akglo0ruX-DcLIJU'
      });

  return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&offset=0&limit=20`)
          .pipe( map ( data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);
          //.pipe( map ( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id }/top-tracks?country=us`)
          .pipe( map ( data => data['tracks']));
  }
}
