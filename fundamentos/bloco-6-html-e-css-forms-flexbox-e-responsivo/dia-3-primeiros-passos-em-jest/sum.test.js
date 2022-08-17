const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./sum')

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

// ---------------------------------------- 5 ------------------------------------------

describe('Testa a função techList', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });


  // --------------------------------------------- 6---------------------------------------

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});