// privyService.ts
import { useEmbeddedWallet, isNotCreated, usePrivy, getUserEmbeddedWallet, PrivyEmbeddedWalletProvider } from '@privy-io/expo';

import { PrivyUser } from "@privy-io/public-api";

/**
* Signs a message using the embedded wallet provider.
*
* @param provider - The Privy embedded wallet provider instance
* @param user - The authenticated Privy user (may be null)
* @returns The signed message as a string or null if signing fails
*/
const signMessage = async (
    provider: PrivyEmbeddedWalletProvider,
    user: PrivyUser | null,
    message: string
): Promise<string | null> => {
    if (!user) {
        console.error("No user provided for signing.");
        return null;
    }

    const account = user?.linked_accounts?.find(acc => acc.type === 'wallet');

    if (!account?.address) {
        throw new Error("No wallet address found for the user.");
    }

    try {
        const signedMessage = await provider.request({
            method: "personal_sign",
            params: [message, account.address],
        });
        return signedMessage;
    } catch (error) {
        console.error("Message signing failed:", error);
        throw new Error(`Signing failed: ${error.message}`);
    }
};

export default signMessage;
