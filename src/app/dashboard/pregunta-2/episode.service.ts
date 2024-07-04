import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episode } from './Episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private urlApi = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  obtenerEpisodios(): Observable<Episode[]> {
    return this.http.get<any>(this.urlApi).pipe(
      map(response => response.results.filter((episode : Episode) => episode.id % 2 !== 0))
    );
  }
}
