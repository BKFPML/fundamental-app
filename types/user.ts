

type User = {
    address: string | null;
    privyID: string;
    wallet: Wallet;
}

type Wallet = {
    account: string;
    status: string;
    provider: string;
}