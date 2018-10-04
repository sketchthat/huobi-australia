export interface Accounts {
  status: string;
  data: {
    id: number;
    type: string;
    subtype: string;
    state: string;
  }[];
}
