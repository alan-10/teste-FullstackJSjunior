import { response } from 'express';
import request from 'supertest';
import { app } from '../server';

import { createDataBaseTest } from '../utils/createAndDeliteDatabaseTest';

describe('User', () => {
  beforeAll(() => {
    createDataBaseTest();
  });

  it('Shold be able to create anew user', async () => {
    const response = await request(app).post('/api/v1/users').send({
      email: 'user@exemple.com',
      password: 'User exemple',
    });

    expect(response.status).toBe(201);
  });

  it('Shold be able to create a user with email exists', async () => {
    const response = await request(app).post('/api/v1/users').send({
      email: 'user@exemple.com',
      password: 'User exemple',
    });

    expect(response.status).toBe(409);
  });

  it('Show all Users', async () => {
    const response = await request(app).get('/api/v1/users');

    expect(response.status).toBe(200);
  });

  it('List One user', async () => {
    const response = await request(app).get(
      '/api/v1/users/cb83cda3-3519-4f43-a6c5-4f8f3e05c6'
    );

    expect(response.status).toBe(200);
  });

  it('Error List one User ', async () => {
    const response = await request(app).get(`/api/v1/users/1221`);

    expect(response.status).toBe(400);
  });

  it('Upadate user', async () => {
    const response = await request(app)
      .put('/api/v1/users/cb83cda3-3519-4f43-a6c5-4f8f3e05c6')
      .send({
        email: 'alan54325766@gmail.com',
        password: '1010100',
      });

    expect(response.status).toBe(200);
  });

  it('Failed update User not found User', async () => {
    const response = await request(app).put('/api/v1/users/00000000').send({
      email: 'alan54325766@gmail.com',
      password: '1010100',
    });

    expect(response.status).toBe(404);
  });

  it('Failed on update User with email alread exists', async() => {
    const response = await request(app).put('/api/v1/users/cb83cda3-3519-4f43-a6c5-4f8f3e05c6').send({
      email: 'alan101010292019@gmail.com',
      password: '55555',
    });

    expect(response.status).toBe(409);
  });

  it('Delete one User', async () => {
    const response = await request(app).delete('/api/v1/users/cb83cda3-3519-4f43-a6c5-4f8f3e05c6');

    expect(response.status).toBe(200);
  });

  it('Faied delite one User', async () => {
    const response = await request(app).delete('/api/v1/users/00000');

    expect(response.status).toBe(400);
  });

  it('Delete all Users', async () => {
    const response = await request(app).delete('/api/v1/users');

    expect(response.status).toBe(200);
  });

});
