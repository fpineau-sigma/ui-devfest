import {Body, Controller, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {ImagesService} from './images.service';
import {IImage} from './image.interface';
import {ImageDto} from './image.dto';
import {existsSync, mkdirSync} from 'fs';
import {ProcessService} from '../process/process.service';
import {processEnum} from '../process/process.enum';

const INIT_FILE_NAME = 'initial.jpg';

@Controller('api/images')
export class ImagesController {

  constructor(
    private readonly  imagesService : ImagesService,
    private readonly  processService : ProcessService
  ){}


  @Post('/test')
  @UseInterceptors(FileInterceptor('file',
    {
      storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = './avatars/' + req.query.id;
          // Create folder if doesn't exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          return cb(null, INIT_FILE_NAME);
        }
      })
    }
    )
  )
  async genererFichierPourImpression(@Param('id') id: string, @UploadedFile() file): Promise<void> {
    const imageDto = new ImageDto();
    imageDto._id = id;
    imageDto.photoInitiale = file;
    return this.imagesService.rabbitEvent(imageDto);
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


  /**
   * Fonction d'initialisation d'une nouvelle image
   */
  @Get('/initialiser')
  async initialiserWorkflow() : Promise<IImage>{
    const image = this.imagesService.initialiserWorkflow();
    this.processService.execCommand(processEnum.TEST);
    return image;
  }

  @Put('/pseudo')
  async miseAjoutPseudo(@Body() image: ImageDto ) : Promise<IImage>{
    return this.imagesService.editImage(image._id, image);
  }
}
