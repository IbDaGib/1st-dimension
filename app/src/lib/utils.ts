// all the basic functions that could exist in another project

// create a const to check if an email is valid in typescript
export function isValidEmail(email: string): boolean {
    // Regular expression to validate email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
