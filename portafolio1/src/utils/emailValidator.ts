// Función para validar email con múltiples criterios
export const validateEmail = (email: string): boolean => {
    // Validación básica de formato
    const formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatRegex.test(email)) return false;
    
    // Verificar que el dominio tenga al menos 2 caracteres en TLD
    const parts = email.split('@');
    const domain = parts[1];
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;
    
    // Verificar dominios comunes falsos
    const fakeDomains = ['example.com', 'test.com', 'domain.com', 'email.com', 'mailinator.com'];
    if (fakeDomains.includes(domain.toLowerCase())) return false;
    
    // Verificar longitud razonable
    if (email.length < 6 || email.length > 254) return false;
    
    return true;
};