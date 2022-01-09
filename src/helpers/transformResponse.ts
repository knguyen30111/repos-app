import isObject from 'lodash/isObject';
import { AxiosPromise, AxiosError } from 'axios';
import { ErrorResponse } from '../typings/helpers/error';

/**
 * Transforms any error from axios error into a Jupiter Response error
 */
export function transformApiError(e: AxiosError): ErrorResponse {
  if (process.env.NODE_ENV !== 'test') {
    console.error(e);
  }
  const hasMessage = e?.response?.data?.message && typeof e.response.data.message === 'string';
  const hasErrors = e?.response?.data?.errors && isObject(e.response.data.errors);
  if (hasMessage && hasErrors) {
    return e.response.data;
  }
  if (hasMessage) {
    return {
      message: e.response.data.message,
      errors: {},
    };
  }
  if (hasErrors) {
    return {
      message: e.message,
      errors: e.response.data.errors,
    };
  }
  return { message: e.message, errors: {} };
}

/**
 * Returns T back from API where T is the response you expect back from the Jupiter API
 * Will rethrow errors transformed into {ErrorResponse} type
 */
export default async function transformResponse<T>(req: AxiosPromise<T>): Promise<T> {
  try {
    const response = await req;
    return response.data;
  } catch (e) {
    throw transformApiError(e);
  }
}
