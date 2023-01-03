import chai from "chai";
import chaiHttp from 'chai-http'

import { VALID_CNPJ } from '../mocks/models.mock'

chai.use(chaiHttp);
chai.should();

describe('CNPJ - Endpoints', () => {
    describe('ROTAS /cnpj', () => {
        it ('GET - should return all cnpjs - 201', done => {
            chai.request('http://localhost:8080')
            .get('/cnpj')
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
        it ('POST - should return created cnpj - 201', done => {
            chai.request('http://localhost:8080')
            .post('/cnpj')
            .send(VALID_CNPJ)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('cnpj').equal(VALID_CNPJ.cnpj);
                done();
            });
        });
        it ('UPDATE - should update a cnpj - 201', done => {
            const NEW_cnpj = VALID_CNPJ
            NEW_cnpj.cnpj = 'TESTE UPDATE'
            chai.request('http://localhost:8080')
            .put('/cnpj/1')
            .send(NEW_cnpj)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('cnpj').equal('TESTE UPDATE');
                done();
            });
        });
        it ('DELETE - should delete a cnpjs - 200', done => {
            chai.request('http://localhost:8080')
            .delete('/cnpj/3')
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                bodyData.should.have.property('message')
                done();
            });
        });
    });
});