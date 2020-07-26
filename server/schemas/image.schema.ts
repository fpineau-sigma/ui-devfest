import { Schema, model, Document } from 'mongoose';
import { IImage } from 'server/images/image.interface';


export const ImageSchema = new Schema({
  pseudo : String,
  imageSelectionnee : Number
});

export const imageModel = model<IImage>('Image', ImageSchema);