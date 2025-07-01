"use client"

import Script from 'next/script';

const RecaptchaScript = () => {
    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=explicit`}
                strategy="afterInteractive"
            />
            <Script id="recaptcha-init">
                {`
                    function onloadCallback() {
                        grecaptcha.render('recaptcha-container', {
                            'sitekey': '${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}',
                            'callback': window.handleRecaptchaCallback,
                            'size': 'invisible'
                        });
                    }
                `}
            </Script>
            <Script
                src={`https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit`}
                strategy="afterInteractive"
            />
        </>
    );
};

export default RecaptchaScript;