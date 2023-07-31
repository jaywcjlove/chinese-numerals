import { lowercase, uppercase, heavenlyDry } from '../';
import upper from '../';

it('=> lowercase.length', () => expect(lowercase.length).toBe(25));
it('=> uppercase.length', () => expect(uppercase.length).toBe(25));
it('=> upper.length', () => expect(upper.length).toBe(25));
it('=> lowercase[3]', () => expect(lowercase[3]).toBe('三'));
it('=> uppercase[2]', () => expect(uppercase[2]).toBe('貳'));
it('=> heavenlyDry[2]', () => expect(heavenlyDry[2 - 1]).toBe('乙'));
it('=> heavenlyDry.length', () => expect(heavenlyDry.length).toBe(10));
