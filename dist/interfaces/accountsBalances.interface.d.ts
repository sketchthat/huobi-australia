export interface AccountsBalances {
    status: string;
    data: AccountsBalancesData;
}
interface AccountsBalancesData {
    id: number;
    type: string;
    state: string;
    list: AccountsBalancesDataList[];
}
interface AccountsBalancesDataList {
    currency: string;
    type: string;
    balance: string;
    address: string;
}
export {};
