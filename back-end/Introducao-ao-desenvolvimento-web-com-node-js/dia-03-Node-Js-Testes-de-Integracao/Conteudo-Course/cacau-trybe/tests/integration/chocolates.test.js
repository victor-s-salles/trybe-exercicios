const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

const mockFile = JSON.stringify({ 
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ],
  });

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando o método GET em /chocolates', function () {

    beforeEach(function () {
        sinon.stub(fs.promises, 'readFile')
          .resolves(mockFile);
      });
    
      afterEach(function () {
        sinon.restore();
      });

    it('Retorna a lista completa de chocolates!', async function () {
        const response = await chai
        .request(app)
        .get('/chocolates');

        expect(response.status).to.be.equals(200);

        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
          ];
          expect(response.body.chocolates).to.deep.equal(output);
    });
});
