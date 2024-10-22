import { describe, it, expect } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";


describe('validateStringNotEmpty()', () => {
    it('should throw an error if the string is empty', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    });

    it('should throw an error if the string is not a string', () => {
        const input = 123;
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    });

    it('should not throw an error if the string is not empty', () => {
        const input = 'Hello';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).not.toThrow();
    });
});

describe('validateNumber()', () => {
    it('should throw an error if the number is not a number', () => {
        const input = 'Hello';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow(/Invalid number/);
    });

    it('should throw an error if a non-numeric value is provided', () => {
        const input = '1';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    })

    it('should not throw an error if the number is a number', () => {
        const input = 123;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
    });
});