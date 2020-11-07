let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Test get', () => {
  it('Should return hello', (done) => {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});
