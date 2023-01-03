import chai from "chai";
import chaiHttp from 'chai-http'

import { VALID_BUYER } from '../mocks/models.mock'

chai.use(chaiHttp);
chai.should();

describe('Buyer - Endpoints', () => {
    describe('ROTAS /buyer', () => {
        it ('GET - should return all buyers - 201', done => {
            chai.request('http://localhost:8080')
            .get('/buyer')
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
        it ('POST - should return created buyer - 201', done => {
            chai.request('http://localhost:8080')
            .post('/buyer')
            .send(VALID_BUYER)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('name').equal(VALID_BUYER.name);
                done();
            });
        });
        it ('UPDATE - should update a buyer - 201', done => {
            const NEW_BUYER = VALID_BUYER
            NEW_BUYER.name = 'TESTE UPDATE'
            chai.request('http://localhost:8080')
            .put('/buyer/1')
            .send(NEW_BUYER)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('name').equal('TESTE UPDATE');
                done();
            });
        });
        it ('DELETE - should delete a buyers - 200', done => {
            chai.request('http://localhost:8080')
            .delete('/buyer/2')
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