import chai from "chai";
import chaiHttp from 'chai-http'

import { VALID_ORDER } from '../mocks/models.mock'

chai.use(chaiHttp);
chai.should();

describe('ORDER - Endpoints', () => {
    describe('ROTAS /order', () => {
        it ('GET - should return all orders - 201', done => {
            chai.request('http://localhost:8080')
            .get('/order')
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
        it ('POST - should return created order - 201', done => {
            chai.request('http://localhost:8080')
            .post('/order')
            .send(VALID_ORDER)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('orderNfId').equal(VALID_ORDER.orderNfId);
                done();
            });
        });
        it ('UPDATE - should update a order - 201', done => {
            const NEW_order = VALID_ORDER
            NEW_order.orderNfId = 'TESTE UPDATE'
            chai.request('http://localhost:8080')
            .put('/order/1')
            .send(NEW_order)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('orderNfId').equal('TESTE UPDATE');
                done();
            });
        });
        it ('DELETE - should delete a orders - 200', done => {
            chai.request('http://localhost:8080')
            .delete('/order/4')
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