const {sum, myRemove, myFizzBuzz} = require('./sum')

describe('teste da função sum', () => {
    it('deve retorna o resultado correto das somas', () =>{
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    })
    it('deve retornar erro em caso não for um número', () =>{
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum (4,'5')).toThrowError('parameters must be numbers');
})})

// -------------------------------------------- 2 --------------------------


describe('teste da função myRemove', () => {
    it('deve retornar o array correto',() => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    } )
    it('deve retornar o array esperado sem erros', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
} )

// ------------------------------------------- 3 ---------------------------

describe('teste da função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBe(false);
      })
})