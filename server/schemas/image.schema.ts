import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  pseudo : String,
  imageSelectionnee : Number
});
