import {Injectable} from '@nestjs/common';
import {exec} from 'child_process';
import {processEnum} from './process.enum';

@Injectable()
export class ProcessService {
  constructor(
  ) {
  }

  /**
   * Publication de l'evenement dans la file rabbitMq
   */
 execCommand(nomCommande : processEnum): void {
   console.log("execution de la commande");
    exec(nomCommande, (err, stdout, stderr)  =>{
      console.log(stdout);
      console.log(stderr);
    });
  }

}
