export interface HeaderI {
  name: string,
}

export interface InspirationalQuotesI {
  quotes: QuotesI[],
  shownQuote: string,
}

export interface QuotesI {
  body: string,
  author: string,
}
