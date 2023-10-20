export interface Genres {
  count:    number;
  next:     null;
  previous: null;
  results:  ResultGenres[];
}

export interface ResultGenres {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
  games:            Game[];
}

export interface Game {
  id:    number;
  slug:  string;
  name:  string;
  added: number;
}
