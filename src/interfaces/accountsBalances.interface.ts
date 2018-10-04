export interface AccountsBalances {
  status: string;
  data: {
    id: number;
    type: string;
    state: string;
    list: AccountsBalancesList[]
  };
}

export interface AccountsBalancesList {
  currency: string;
  type: string;
  balance: string;
  address: string;
}
