export interface PlatformList {
  count:          number;
  next:           string;
  previous:       null;
  results:        ResultListPlatform[];
  user_platforms: boolean;
}

export interface ResultListPlatform {
  slug:               string;
  name:               string;
  playtime:           number;
  platforms:          Platform[];
  stores:             Store[];
  released:           Date;
  tba:                boolean;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status:    AddedByStatus;
  metacritic:         number;
  suggestions_count:  number;
  updated:            string;
  id:                 number;
  score:              null;
  clip:               null;
  tags:               Tag[];
  esrb_rating:        EsrbRating;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    Color;
  dominant_color:     Color;
  short_screenshots:  ShortScreenshot[];
  parent_platforms:   Platform[];
  genres:             Genre[];
}

export interface AddedByStatus {
  yet:     number;
  owned:   number;
  beaten:  number;
  toplay:  number;
  dropped: number;
  playing: number;
}

export enum Color {
  The0F0F0F = "0f0f0f",
}

export interface EsrbRating {
  id:      number;
  name:    Name;
  slug:    Slug;
  name_en: Name;
  name_ru: NameRu;
}

export enum Name {
  Mature = "Mature",
  Teen = "Teen",
}

export enum NameRu {
  С13Лет = "С 13 лет",
  С17Лет = "С 17 лет",
}

export enum Slug {
  Mature = "mature",
  Teen = "teen",
}

export interface Genre {
  id:   number;
  name: string;
  slug: string;
}

export interface Platform {
  platform: Genre;
}

export interface Rating {
  id:      number;
  title:   Title;
  count:   number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface Store {
  store: Genre;
}

export interface Tag {
  id:               number;
  name:             string;
  slug:             string;
  language:         Language;
  games_count:      number;
  image_background: string;
}

export enum Language {
  Eng = "eng",
  Rus = "rus",
}
