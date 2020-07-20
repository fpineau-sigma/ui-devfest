import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Image} from '../model/image.model';
import {imageToFile} from '../../shared/utils/image.util';

const url = 'api/images';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  constructor(private http: HttpClient) {}

  /**
   * Fonction de génération de l'image prise avec la caméra
   * @param image Image à générer pour impression
   */
  generer(image: string, id: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageToFile(image, id));
    return this.http.post<string>(`${url}/test?id=`+id, formData);
  }

  /**
   * Fonction permettant la récupération des images générées
   * @param image Image contenant les informations permettant la récupération des images générées par le back
   */
  recupererImagesGenerer(image:Image) : Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<any>(`${url}/generer/${image._id}`, { headers, responseType: 'text' as 'json'});
  }

  /**
   * Fonction permettant l'impression de l'image selectionnée
   * @param image Image contenant l'image selectionnée à imprimer
   */
  impressionImage(image: string, id: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageToFile(image, id));
    return this.http.post<string>(`${url}/imprimer`, formData);
  }

  /**
   * Fonction d'initilisation du workflow
   * Retourne une entité vide avec l'id de l'image qui sera utilisé pour le workflow
   */
  initialiserWorkflow(): Observable<Image>{
    return this.http.get<Image>(`${url}/initialiser`);
  }

  /**
   * Mise à jour du pseudo dans la BDD
   */
  miseAjourPseudo(image: Image): Observable<Image>{
    return this.http.put<Image>(`${url}/pseudo`, image);
  }
}
