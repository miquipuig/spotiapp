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
      'Authorization': 'Bearer BQBixpuVFdcbnUA9t0BVw0lrJHHrMMxQWD1Fx0-c7ZJ_hbcyFGiQQlM2TrDmc7STVs3-AVLbzLqUna0FSQM'
      });

  return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
            .pipe(map(data => data['albums'].items));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&offset=0&limit=20`)
          .pipe( map ( data => data['artists'].items));
  }

}
