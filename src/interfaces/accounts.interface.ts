export interface Accounts {
  status: string;
  data: AccountsData[];
}

interface AccountsData {
  id: number;
  type: string;
  subtype: string;
  state: string;
}
