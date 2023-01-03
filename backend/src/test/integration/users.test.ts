import chai from "chai";
import chaiHttp from 'chai-http'

import { VALID_USER } from '../mocks/models.mock'

chai.use(chaiHttp);
chai.should();

describe('USER - Endpoints', () => {
    describe('ROTAS /user', () => {
        it ('GET - should return all users - 201', done => {
            chai.request('http://localhost:8080')
            .get('/user')
            .end((err, res) => {
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(200);
                done();
            });
        });
        it ('POST - should return created user - 201', done => {
            chai.request('http://localhost:8080')
            .post('/user')
            .send(VALID_USER)
            .end((err, res) => {
                const bodyData = res.body
                chai.assert.isNull(err);
                chai.assert.isNotEmpty(res.body);
                res.should.have.status(201);
                bodyData.should.have.property('id');
                bodyData.should.have.property('name').equal(VALID_USER.name);
                done();
            });
        });
        it ('UPDATE - should update a user - 201', done => {
            const NEW_order = VALID_USER
            NEW_order.name = 'TESTE UPDATE'
            chai.request('http://localhost:8080')
            .put('/user/1')
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
        it ('DELETE - should delete a user - 200', done => {
            chai.request('http://localhost:8080')
            .delete('/user/2')
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