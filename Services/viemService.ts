import { createWalletClient, custom } from 'viem';
import { PrivyEmbeddedWalletProvider } from '@privy-io/expo';
import { base } from 'viem/chains';

const getWalletClient = async (provider: PrivyEmbeddedWalletProvider) => {
    await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x2105' }],
    });

    const walletClient = createWalletClient({
        chain: base,
        transport: custom(provider),
    });

    return walletClient;
};

const signMessage = async ( provider: PrivyEmbeddedWalletProvider, message: string ) => {
    const client = await getWalletClient(provider);
    const [account] = await client.getAddresses();

    try {
        const signature = await client.signMessage({
            account,
            message,
        });
    } catch (error) {
        console.error('Error signing message:', error);
    }
};

export default { getWalletClient, signMessage };
