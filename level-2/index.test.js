'use strict'

const {
    addProperties,
    addConstantProperty,
    shallowClone,
    deepClone
} = require('./');

describe('Test addProperties', () => { 
    let input = null;

    beforeEach(() => {
        input = { };
    });

    test(`Object should have a property "key" added to it whose value should be equal to "lock".`, () => {
        const output = addProperties(input);

        expect(output === input).toBeTruthy();

        expect(output).toHaveProperty('key', 'lock');
    });

    test(`The "key" property shouldn't show up in Object.keys, Object.entries, Object.getOwnPropertyDescriptor or the for ... in loop.`, () => {
        const output = addProperties(input);

        expect(Object.keys(output)).not.toContain('key');
        
        expect(Object.getOwnPropertyDescriptor(output, 'key')).not.toBeTruthy();
    });
});

describe('Test addConstantProperty', () => { 
    const input = { };

    test(`Object should have a property "key" and it should have a constant value of "lock". Please note you can't use Object.freeze().`, () => {
        const output = addConstantProperty(input);

        expect(output === input).toBeTruthy();

        expect(Object.isFrozen(output)).toBeFalsy();
        
        output.key = Math.random().toString();
        expect(output).toHaveProperty('key', 'lock');
    });
});

describe('Test shallowClone', () => {
    let input = null;

    beforeEach(() => {
        input = { 
            a: {
                a: 'a'
            },
            b: {
                b: 'b'
            }
        };
    });

    test('Whether output and input are different references.', () => {
        const output = shallowClone(input)

        expect(typeof output).toEqual(typeof input);

        expect(output === input).toBeFalsy();
    });

    test('Output key references should be the same as input key references.', () => {
        const output = shallowClone(input);

        expect(Object.keys(output)).toEqual(Object.keys(input));

        for (const prop in output) {
            expect(output[prop]).toBe(input[prop]);
        }
    });
});

describe('Test deepClone', () => {
    let input = null;

    beforeEach(() => {
        input = { 
            a: {
                a: 'a'
            },
            b: {
                b: 'b'
            }
        };
    });

    test('Whether output and input are different references.', () => {
        const output = deepClone(input)
        
        expect(typeof output).toEqual(typeof input);

        expect(output === input).toBeFalsy();
    });

    test('Output key values should be the same as input key values but should be different references.', () => {
        const output = deepClone(input);

        expect(Object.keys(output)).toEqual(Object.keys(input));

        for (const prop in output) {
            expect(output[prop]).not.toBe(input[prop]);
            expect(output[prop]).toStrictEqual(input[prop]);
        }
    });
});