const { somar, subtrair, dividir, multiplicar } = require('./teste')

test('Somar dois numeros', () => {
    expect(somar(1, 2)).toBe(3);
});

test('subtrair dois numeros', () => {
    expect(subtrair(3, 2)).toBe(1);
});

test('dividir dois numeros', () => {
    expect(dividir(4, 2)).toBe(2);
});

test('multiplicar dois numeros', () => {
    expect(multiplicar(1, 2)).toBe(2);
});