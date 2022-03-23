
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {

  }

  /**
   * 
   * @returns Devolver todas las canciones
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}
   * 
   * @returns 
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }


  /**
   * 
   * @returns Devolver canciones random
   */
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}
