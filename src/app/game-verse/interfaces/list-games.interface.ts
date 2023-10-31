export interface GameVerse {
  count:                number;
  next:                 string;
  previous:             null;
  results:              Result[];
  seo_title:            string;
  seo_description:      string;
  seo_keywords:         string;
  seo_h1:               string;
  noindex:              boolean;
  nofollow:             boolean;
  description:          string;
  filters:              Filters;
  nofollow_collections: string[];
}

export interface Filters {
  years: FiltersYear[];
}

export interface FiltersYear {
  from:     number;
  to:       number;
  filter:   string;
  decade:   number;
  years:    YearYear[];
  nofollow: boolean;
  count:    number;
}

export interface YearYear {
  year:     number;
  count:    number;
  nofollow: boolean;
}

export interface Result {
  id:                 number;
  slug:               string;
  name:               string;
  released:           string;
  tba:                boolean;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status?:    AddedByStatus;
  metacritic:         number;
  playtime:           number;
  suggestions_count:  number;
  updated:            string;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    string;
  dominant_color:     string;
  platforms:          PlatformElement[];
  parent_platforms:   ParentPlatform[];
  genres:             Genre[];
  stores:             Store[];
  clip:               null;
  tags:               Genre[];
  esrb_rating?:        EsrbRating;
  short_screenshots:  ShortScreenshot[];
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
  id:   number;
  name: string;
  slug: string;
}

export interface Genre {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
  domain?:          string;
  language?:        Language;
}

export enum Language {
  Eng = "eng",
}

export interface ParentPlatform {
  platform: EsrbRating;
}

export interface PlatformElement {
  platform:        PlatformPlatform;
  released_at:     Date;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

export interface PlatformPlatform {
  id:               number;
  name:             string;
  slug:             string;
  image:            null;
  year_end:         null;
  year_start:       number | null;
  games_count:      number;
  image_background: string;
}

export interface Requirements {
  minimum:      string;
  recommended?: string;
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
  id:    number;
  store: Genre;
}
