/**
 * Prépare le tri pour être compatible avec l'objet @Pageable de Spring
 * @param tris
 * tableau de tris générés par ngx-datatable
 */
import {Image} from '../../core/model/image.model';

// Transform une dataUri en Blob
export const dataURItoBlob = (dataURI : string) : Blob => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], {type: mimeString});
  return blob;
}

// Transforme un imageDto en fichier
export const imageToFile = (image: Image): File => {
  const imageName = image.pseudo + '.jpeg';
  // call method that creates a blob from dataUri
  const imageBlob = dataURItoBlob(image.imageData);
  return new File([imageBlob], imageName, { type: 'image/jpeg' });
}
