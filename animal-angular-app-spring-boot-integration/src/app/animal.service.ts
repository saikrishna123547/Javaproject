import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Animal } from './animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {


  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:8122/animal";
  }

  public addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.url, animal);
  }

  public getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url + "s");
  }

  public deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(this.url + "/" + id);
  }

  public updateAnimal(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(this.url, animal);
  }
}
