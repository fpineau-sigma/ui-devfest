import { Document } from 'mongoose';

export interface Image extends Document {
  readonly pseudo: string;
  readonly imageSelectionnee: number;
}
