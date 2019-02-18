const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should;

const request = require('supertest');

const app = require('../app');

describe('Unit testing /math/add ROUTE', function() {

    it('should return 422 status if numbers are missing from query params', function() {
      return request(app)
        .get('/math/add')
        .then(function(response){
            assert.equal(response.status, 422);
        });
    });

    it('should return 422 status if numbers param is not an array', function() {
        return request(app)
            .get('/math/add')
            .query({ numbers:5})
            .then(function(response){
                assert.equal(response.status, 422);
            });
    });

    it('should return 500 status if numbers array contains non numeric value', function() {
        return request(app)
            .get('/math/add')
            .query({ numbers: [2, 3, 4, "hey"]})
            .then(function(response){
                assert.equal(response.status, 500);
            });
    });

     it('should return 200 status and some sort of numerical answer if a valid array of numbers is passed', function() {
      return request(app)
        .get('/math/add')
        .query({ numbers: [2, 3, 4, 5]})
        .then(function(response){
            assert.equal(response.status, 200);
            assert.property(response.body, 'answer');
            assert.typeOf(response.body.answer, 'number');
        });
    });

    it('should add a list of numbers correctly and return the answer', function() {
        return request(app)
            .get('/math/add')
            .query({ numbers: [2,2,2]})
            .then(function(response){
                assert.equal(response.status, 200);
                assert.property(response.body, 'answer');
                assert.typeOf(response.body.answer, 'number');
                assert.equal(response.body.answer, 6);
            });
    });

    it('should add a list of numbers correctly (containing negative value) and return the answer', function() {
        return request(app)
            .get('/math/add')
            .query({ numbers: [-2,-2,2]})
            .then(function(response){
                assert.equal(response.status, 200);
                assert.property(response.body, 'answer');
                assert.typeOf(response.body.answer, 'number');
                assert.equal(response.body.answer, -2);
            });
    });

});


