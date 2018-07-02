import { Film }  from '../Film/Film';
import { People }  from '../People/People';

export class ObjectConverter {

  public convertResponseToFilm(r:any): Film{

    let film = <Film>({
      title: r.title,
      episode_id: r.episode_id,
      opening_crawl: r.opening_crawl,
      director: r.director,
      producer: r.producer,
      release_date: r.release_date,
    });

    return film;
  };


  public convertResponseToPeople(r:any): People{

    let people = <People>({
      birth_year: r.birth_year,
      eye_color: r.eye_color,
      openingCrawl: r.openingCrawl,
      gender: r.gender,
      hair_color: r.hair_color,
      height: r.height,
      homeworld: r.homeworld,
      mass: r.mass,
      name: r.name,
      skin_color: r.skin_color,
      created: r.created,
      edited: r.edited,
    });

    return people;
  };



}
