'use strict';
const {app} = require('../server');
const supertest = require('supertest');
const request = supertest(app);
describe('testing API server', ()=>{
    it ('testing /', async()=> {
        const response = await request.get('/');
        expect(response.text).toEqual('Hello World');
    })
    it('testing /person ', async()=>{
        const response = await request.post('/person');
        expect(typeof response.body).toEqual('object');
    })
})