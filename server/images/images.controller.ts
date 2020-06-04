import {Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {Image} from '../../src/app/core/model/image.model';
import * as fs from 'fs';
import {ImagesService} from './images.service';

@Controller('api/images')
export class ImagesController {

  constructor(
    private readonly  imagesService : ImagesService
  ){}


  /**
   * Géneration du fichier pour impression
   * @param file fichier à transformer
   * TODO : remplacer generer par transformer
   */
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file): string {
    console.log(file);
    return 'ok';
  }

  @Post('/test')
  @UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        destination: './avatars',
        filename: (req, file, cb) => {
          return cb(null, `${file.originalname}`);
        }
      })
    }
    )
  )
  genererFichierPourImpression(@UploadedFile() file): string {
    console.log(file);
    this.imagesService.rabbitEvent();
    return null;
  }

  /**
   * Fonction qui permet l'ensemble des images générées dans un tableau
   * @param pseudo Pseudo des images à récupérer
   * TODO : Passer en paramètre l'uuid plutôt que le pseudo
   * @param res permet de lire le fichier
   */
  @Get('/generer/:pseudo')
  async recupererImagesGenerer(@Param('pseudo') pseudo: string, @Res() res): Promise<any> {
    res.sendFile('chuck.svg', { root: 'avatars'});
  }

  /**
   * Permet l'impression d'une image selectionnée
   * @param file Fichier à imprimer
   */
  @Post('/imprimer')
  @UseInterceptors(FileInterceptor('file'))
  imprimerImage(@UploadedFile() file): string {
    console.log(file);
    return null;
  }
}
