import { Injectable } from '@angular/core';
import { Image } from './Image';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private urlApi = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  obtenerFotos(): Observable<Image[]> {
    return this.http.get<Image[]>(this.urlApi).pipe(
      map(fotos => fotos.filter((foto: Image) => 
        foto.title.startsWith('a') || 
        foto.title.startsWith('r') || 
        foto.title.startsWith('s')
      ))
    );
  }
}
