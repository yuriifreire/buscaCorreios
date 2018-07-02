import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Film } from './Film';
import {Observable} from 'rxjs/Rx';

// Importar RxJs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UrlCollection } from '../Helpers/UrlCollection';
import { ObjectConverter } from '../Helpers/ObjectConverter';

@Injectable()
export class FilmService {
  // Resolve o HTTP usando o construtor
  constructor (
    private http: Http,
  ) {}

  // variavel publica
  public PAGESIZE: number = 10
  public totalPage: number = 0
  public count: number = 0
  public currentPage: number = 1
  public isNextable: boolean = false
  public isPrevable: boolean = false

  getFilms(): Observable<Film[]> {

    let thisService = this;
    let objectConverter = new ObjectConverter();

    function mapFilmResponse(response: Response): Film[]{
      thisService.currentPage = 1;
      thisService.count = response.json().count;
      thisService.isNextable = response.json().next !== null;
      thisService.isPrevable = response.json().previous !== null;

      if (thisService.count > thisService.PAGESIZE){
        thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE)
      }else {
        thisService.totalPage = 0;
      }


      // Se a API retornar resultados
      return response.json().results.map(objectConverter.convertResponseToFilm)
    }

    // Puxa os dados usando o verbo GET
    return this.http.get(UrlCollection.FILM)
      // chama o .json() pra exibir
      .map(mapFilmResponse)
      // Retorna os erros
      .catch((error: any) => Observable.throw(error.json().error || 'Erro de Servidor'));

  }

}
