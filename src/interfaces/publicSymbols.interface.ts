export interface PublicSymbols {
  status: string;
  data: PublicSymbolsData[];
}

interface PublicSymbolsData {
  'base-currency': string;
  'quote-currency': string;
  'price-precisions': number;
  'amount-precision': number;
  'symbol-partition': string;
}
