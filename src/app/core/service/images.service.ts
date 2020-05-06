import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from '../model/image.model';
import {imageToFile} from '../../shared/utils/image.util';

const url = 'api/images/test';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  constructor(private http: HttpClient) {}

  generer(image: Image): Observable<any> {
    const formData = new FormData();
    formData.append('file', imageToFile(image));
    return this.http.post<Image>(`${url}`, formData);
  }
}
