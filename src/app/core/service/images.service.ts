import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from '../model/image.model';
import {SERVER_API_URL} from '../../shared/constants/app.constants';

const url = SERVER_API_URL + 'api/images';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  constructor(private http: HttpClient) {}

  generer(image: Image): Observable<any> {
    return this.http.post<Image>(`${url}`, image);
  }
}
