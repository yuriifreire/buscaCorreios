import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { People }    from './People';
import {Observable} from 'rxjs/Rx';

// Importa RxJs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UrlCollection } from '../Helpers/UrlCollection';
import { ObjectConverter } from '../Helpers/ObjectConverter';

@Injectable()
export class PeopleService {
  // Resolve o HTTP usando o construtor
  constructor (
    private http: Http
  ) {}

  // varivel publica
  public PAGESIZE: number = 10;
  public totalPage: number = 0;
  public count: number = 0;
  public currentPage: number = 1;
  public isNextable: boolean = false;
  public isPrevable: boolean = false;


  getPeople() : Observable<People[]> {
    let thisService = this;
    let objectConverter = new ObjectConverter();

    function mapPeopleResponse(response:Response): People[]{

      thisService.currentPage = 1;
      thisService.count = response.json().count;
      thisService.isNextable = response.json().next !== null;
      thisService.isPrevable = response.json().previous !== null;

      if(thisService.count > thisService.PAGESIZE){
        thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
      }else{
        thisService.totalPage = 0;
      }

      // Se a API retornar resultados
      return response.json().results.map(objectConverter.convertResponseToPeople)
    }

    // Puxa os dados usando o verbo GET
    return this.http.get(UrlCollection.PEOPLE)
      // chama o .json() pra exibir
      .map(mapPeopleResponse)
      // Retorna os erros
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
