import MockAdapter from 'axios-mock-adapter';
import axios from '../../services/api';
import transformResponse from '../../helpers/transformResponse';
import { ErrorResponse } from '../../typings/helpers/error';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

const url = 'https://google.com';

describe('axios instance', function () {
  describe('error handling', function () {
    beforeEach(function () {
      mock.onPost(url).reply(200, '', { 'Content-Type': 'text/html' });
    });

    test('should throw error when a non json response is returned', async () => {
      await expect(() => axios.post(url)).rejects.toThrow(new Error('Response not processable'));
    });
  });

  describe('transformResponse', function () {
    describe('with standard APIError', function () {
      beforeEach(function () {
        const errorResponse: ErrorResponse = {
          errors: { scheduled_at: ['Date was in the past'] },
          message: 'Scenario Delivery was invalid',
        };
        mock.onPost(url).reply(422, errorResponse);
      });

      test('should throw error for non-200 response', async () => {
        expect(() => axios.post(url)).rejects.toThrow();
      });
      test('should serialize the error correctly ', async () => {
        try {
          await transformResponse(axios.post(url));
        } catch (res) {
          expect(res.message).toBeTruthy();
          expect(res.errors).toBeTruthy();
        }
      });
    });

    describe('with non-standard APIError', function () {
      beforeEach(function () {
        const errorResponse = {};
        mock.onPost(url).reply(422, errorResponse);
      });

      test('should throw error for non-200 response', async () => {
        expect(() => axios.post(url)).rejects.toThrow();
      });
      test('should serialize the error correctly ', async () => {
        try {
          await transformResponse(axios.post(url));
        } catch (res) {
          expect(res.message).toBeTruthy();
          expect(res.errors).toBeTruthy();
        }
      });
    });
  });
});
