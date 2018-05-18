export interface HeaderI {
  name: string,
}

export interface QuotesI {
  body: string,
  author: string,
}
export interface InspirationalQuotesI {
  counter: number,
  quotes: QuotesI[],
  shownQuote: string,
}

export interface ProjectI {
  name: string,
  description: string,
  href: string,
}

