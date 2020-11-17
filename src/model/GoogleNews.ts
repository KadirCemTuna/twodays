export interface GoogleNews {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: null | string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  GoogleNewsIn = 'google-news-in',
}

export enum Name {
  GoogleNewsIndia = 'Google News (India)',
}
