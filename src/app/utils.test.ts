import { sum } from './utils';

describe('Toplama Fonksiyonu (TypeScript)', () => {

  it('1 + 2 işleminin sonucu 3 olmalıdır', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('negatif sayıların toplamı doğru hesaplanmalıdır', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  
});