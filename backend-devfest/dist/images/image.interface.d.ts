import { Document } from 'mongoose';
export interface IImage extends Document {
    pseudo: string;
    imageSelectionnee: number;
}
