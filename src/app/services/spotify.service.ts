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
      'Authorization': 'Bearer BQCXVOTfqG6Tr0L37QdXe9uAUJZF-jJPVLc5x3sABbsLfP9GqFKgJh2Rd2p45CuX1ThAxJLiShlS0ZFDCmA'
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
