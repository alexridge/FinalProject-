const app = require('../../app')
const request = require('supertest')
require('../mongodb_helper')
const User = require('../../models/user')

describe('/users', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  })

  describe('POST, when email and password are provided', () => {
    test('the response code is 201', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          username: 'sharkira',
          email: 'sharkira@email.com',
          password: '12345678Ab*',
        })
      expect(response.statusCode).toBe(201)
    })

    test('a user is created', async () => {
      await request(app)
        .post('/users')
        .send({
          username: 'sharkira',
          email: 'sharkira@email.com',
          password: '12345678Ab*',
        })
      let users = await User.find()
      let newUser = users[users.length - 1]
      expect(newUser.email).toEqual('sharkira@email.com')
    })
  })

  describe('POST, when password is missing', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          username: 'scarlett',
          email: 'skye@email.com' })
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('All fields must be filled')
    })

    test('does not create a user', async () => {
      await request(app).post('/users').send({ email: 'skye@email.com' })
      let users = await User.find()
      expect(users.length).toEqual(0)
    })
  })

  describe('POST, when email is missing', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          username: 'sharkira',
          password: '12345678Ab*',
        })
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('All fields must be filled')
    })

    test('does not create a user', async () => {
      await request(app).post('/users') .send({
        username: 'sharkira',
        password: '12345678Ab*',
      })
      let users = await User.find()
      expect(users.length).toEqual(0)
    })
  })

  describe('POST, when username is missing', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          email: 'scarlett@email.com',
          password: '12345678Ab*',
        })
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('All fields must be filled')
    })

    test('does not create a user', async () => {
      await request(app).post('/users') .send({
        email: 'scarlett@email.com',
        password: '12345678Ab*',
      })
      let users = await User.find()
      expect(users.length).toEqual(0)
    })
  })

  describe('POST, when email is not valid', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          username: 'sharkira',
          email: 'sharkira',
          password: '12345678Ab*',
        })
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('Email is not valid')
    })

    test('does not create a user', async () => {
      await request(app).post('/users')  .send({
        username: 'sharkira',
        email: 'sharkira',
        password: '12345678Ab*',
      })
      let users = await User.find()
      expect(users.length).toEqual(0)
    })
  })

  describe('Post, when Email is already in use', () => {
    test('the response code is 201', async () => {
      let response = await request(app)
       .post('/users')
       .send({
        username: 'sharkira',
        email: 'sharkira@email.com',
        password: '12345678Ab*',
      });
      expect(response.statusCode).toBe(201);

      new_response = await request(app)
      .post('/users')
      .send({
      username: 'sharkira1',
      email: 'sharkira@email.com',
      password: 'new12345678Ab*',
      });
      expect(new_response.statusCode).toBe(400);
      expect(new_response.body.message).toEqual('Email already in use');
    })
  })

  describe('POST, when password does not meet the requirements', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          username: 'sharkira',
          email: 'sharkira@email.com',
          password: '12345678',
        })
      expect(response.statusCode).toBe(400)
      expect(response.body.message).toEqual('Password does not meet the requirements')
    })

    test('does not create a user', async () => {
      await request(app).post('/users')    .send({
        username: 'sharkira',
        email: 'sharkira@email.com',
        password: '12345678',
      })
      let users = await User.find()
      expect(users.length).toEqual(0)
    })
  })

  describe('Post, when Username is already in use', () => {
    test('the response code is 201', async () => {
      let response = await request(app)
       .post('/users')
       .send({
        username: 'sharkira',
        email: 'sharkira@email.com',
        password: '12345678Ab*',
      });
      expect(response.statusCode).toBe(201);

      new_response = await request(app)
      .post('/users')
      .send({
      username: 'sharkira',
      email: 'sharkira1@email.com',
      password: 'new12345678Ab*',
      });
      expect(new_response.statusCode).toBe(400);
      expect(new_response.body.message).toEqual('Username already in use');
    })
  })
})