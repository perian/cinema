export type Film = {
  id: number,
  title: string,
  year: number,
  genre: string,
  src: string,
  backgroundImg: string,
  backgroundColor: string,
  ratingScore: number,
  ratingLevel: string,
  ratingCount: number,
  description: string,
  director: string,
  starring: string,
  videoLink: string,
}

export type Films = Film[];
