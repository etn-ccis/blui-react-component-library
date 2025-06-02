/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegistrationUIActions, AccountDetails } from '@brightlayer-ui/react-auth-workflow';

// Constants
import { SAMPLE_EULA } from './constants/sampleEula';

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

function isRandomFailure(): boolean {
    const randomResponseNumber = getRandomInt(100);
    return false; // randomResponseNumber < 90;
}

/**
 * Example implementation of [[RegistrationUIActions]] to start with during development.
 *
 * Registration Actions to be performed based on the user's actions. The application will create appropriate actions
 * (often API calls, local network storage, credential updates, etc.) based on the actionable needs of the user.
 */
export const ProjectRegistrationUIActions: () => RegistrationUIActions = () => ({
    /**
     * The user wants to complete an action but must first accept the EULA.
     * The application should retrieve an application-specific EULA for the user.
     *
     * @param language  The i18n language the user is requesting for the EULA text.
     *
     * @returns Resolve with EULA, otherwise reject with an error message.
     */
    loadEula: async (language: string): Promise<string> => {
        await sleep(1000);

        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }

        if (!language.includes('en')) {
            return 'Other language EULA';
        }

        return SAMPLE_EULA;
    },

    /**
     * The user accepted the EULA.
     * The API should now update accepted EULA.
     *
     *
     * @returns Resolve when the server accepted the request.
     */
    acceptEula: async (): Promise<void> => {
        await sleep(800);
        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
    },

    requestRegistrationCode: async (email: string): Promise<string> => {
        await sleep(800);
        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
        return 'a1b2c3';
    },

    createPassword: async (password: string): Promise<boolean> => {
        await sleep(800);
        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
        return true;
    },

    setAccountDetails: async (details: AccountDetails): Promise<boolean> => {
        await sleep(800);
        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
        return true;
    },

    /**
     * The user has tapped on an email link inviting them to register with the application.
     * The application should validate the code provided by the link.
     *
     * @param validationCode  Registration code provided from the link.
     * @param validationEmail  Email provided from the invitation email link (optional) `?email=addr%40domain.com`.
     *
     * @returns Resolves when the code is valid. True if registration is complete, False if account information is needed.
     *          If the code is not valid a rejection will occur with an error message.
     */
    validateUserRegistrationRequest: async (
        validationCode: string,
        validationEmail?: string
    ): Promise<{ codeValid: boolean | string; accountExists?: boolean }> => {
        await sleep(800);

        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
        return { codeValid: true, accountExists: false };
    },

    completeRegistration: async (userData: object): Promise<{ email: string; organizationName: string }> => {
        const email = 'example@email.com';
        const organizationName = 'Acme Co.';
        const userInfo = { email, organizationName };

        await sleep(1000);
        if (isRandomFailure()) {
            throw new Error('Sorry, there was a problem sending your request.');
        }
        return userInfo;
    },
});
