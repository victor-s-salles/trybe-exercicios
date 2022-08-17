const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum')

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
// ------------------------------------------- 4 ----------------------------

describe('testa a função encode e decode', () =>{
    it('verifica se a função encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    })
    it('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
    })
    it('teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () =>{
        expect(decode('12345')).toEqual('aeiou');
    })
    it('Teste se as demais letras/números não são convertidos para cada caso', ()=> {
        expect(encode('akeiw')).toEqual('1k23w');
        expect(decode('1k23w')).toEqual('akeiw');
    })
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () =>{
        expect(encode('akeiw').length).toEqual(5);
        expect(decode('1k23w').length).toEqual(5);
    })
})