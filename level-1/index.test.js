const { 
    incrementInObject, 
    calculateTotalPrice, 
    numberOfCharactersInString,
    isPalindrome
} = require('./');

describe('Test incrementInObject', () => {
    let input = null;

    beforeEach(() => {
        input = {
            array: [1, 2, 3, 5, 10]
        };
    });

    test('Return an object with a key of "array".', () => {
        expect(incrementInObject(input).array).not.toBeUndefined();
    });

    test(`"array" key should have a length of the original "array" key.`, () => {
        expect(incrementInObject(input).array).toHaveLength(5);
    });

    test('Each value in the "array" key should be incremented by one.', () => {
        expect(incrementInObject(input).array).toEqual([2, 3, 4, 6, 11]);
    });
});

describe('Test calculateTotalPrice', () => {
    const input = [
        { quantity: 1, price: 1.0 },
        { quantity: 2, price: 1.5 },
        { quantity: 3, price: 2.0 }
    ];

    test('Total price should be a number and equal to quantity times the price in each JSON item.', () => {
        expect(calculateTotalPrice(input)).toBe(10);
    });
});

describe('Test numberOfCharactersInString', () => {
    test.each([
        ['abccdeffg', { a: 1, b: 1, c: 2, d: 1, e: 1, f: 2, g: 1 }],
        ['', {}]
    ])(
        'Return value should be an object with count of each character as a key value pair.',
        (input, expected) => {
            expect(numberOfCharactersInString(input)).toEqual(expected);
        }
    );
});

describe('Test isPalindrome', () => {
    test.each([['abccdeffgg', false], ['acbca', true], ['acbbca', true]])( 
        'Return value should be a boolean (true or false) to indicate whether the input was a palindrome or not.', 
        (item, expected) => {
        expect(isPalindrome(item)).toBe(expected);
    });
});
