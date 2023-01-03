import chai from "chai";
import chaiHttp from 'chai-http'

import { VALID_PROVIDER } from '../mocks/models.mock'

chai.use(chaiHttp);
chai.should();

describe('PROVIDER - Endpoints', () => {
    describe('ROTAS /provider', () => {
        it ('GET - should return all providers - 201', done => {
            chai.request('http://localhost:8080')
            .get('/provider')
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
        it ('POST - should return created provider - 201', done => {
            chai.request('http://localhost:8080')
            .post('/provider')
            .send(VALID_PROVIDER)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('name').equal(VALID_PROVIDER.name);
                done();
            });
        });
        it ('UPDATE - should update a provider - 201', done => {
            const NEW_order = VALID_PROVIDER
            NEW_order.name = 'TESTE UPDATE'
            chai.request('http://localhost:8080')
            .put('/provider/1')
            .send(NEW_order)
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
        it ('DELETE - should delete a providers - 200', done => {
            chai.request('http://localhost:8080')
            .delete('/provider/2')
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