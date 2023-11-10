import app from '../../src/app';
import request from 'supertest';

// example

// loginUser test
const endpoint = '/api/user/login';
describe('LoginUser test', ()=>{
    it('Should return 200 status code', async()=>{
        const res = await request(app)
        .post(endpoint)
        .send({
            "email":"test@test.com",
            "password":"1"
        })
        expect(res.statusCode).toBe(200);
    })
})