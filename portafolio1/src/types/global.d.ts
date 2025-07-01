/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
    handleRecaptchaCallback: (token: string) => void;
    grecaptcha: any;
    onloadCallback: () => void;
}