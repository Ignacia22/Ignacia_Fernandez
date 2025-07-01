// Validar si el envío parece ser de un bot
export const isBotSubmission = (
    honeypot: string, 
    formLoadTime: number, 
    recaptchaToken: string
): boolean => {
    // Verificar campo honeypot
    if (honeypot !== "") return true;
    
    // Verificar tiempo de llenado del formulario (menos de 3 segundos es sospechoso)
    const formFillTime = Date.now() - formLoadTime;
    if (formFillTime < 3000) return true;
    
    // Verificar si falta token de reCAPTCHA
    if (!recaptchaToken) return true;
    
    return false;
};