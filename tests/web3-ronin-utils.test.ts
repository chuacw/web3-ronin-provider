import { isErrorObj, isErrorResponse } from "../src/web3-ronin-utils";

describe('web3-ronin-utils', () => {

  test('isErrorObj false1', () => {
    const result = isErrorObj({
    });
    expect(result).toBe(false);
  });

  test('isErrorObj false2', () => {
    const result = isErrorObj({
      errorCode: 5,
      message: 5
    });
    expect(result).toBe(false);
  });

  test('isErrorObj true', () => {
    const result = isErrorObj({
      errorCode: 5,
      message: "hello"
    });
    expect(result).toBe(true);
  });

  test('isErrorResponse 1', () => {
    // isArbitraryObject(obj) &&
    // 'response' in obj &&
    // isArbitraryObject(obj.response) &&
    // 'data' in obj.response &&
    // isErrorObj(obj.response.data)
    const obj = {
    }
    const result = isErrorResponse(obj);
    expect(result).toBe(false);
  });

  test('isErrorResponse 2', () => {
    const obj = {
      response: 5
    }
    const result = isErrorResponse(obj);
    expect(result).toBe(false);
  });

  test('isErrorResponse 3', () => {
    const obj = {
      response: 5
    }
    const result = isErrorResponse(obj);
    expect(result).toBe(false);
  });

  test('isErrorResponse 4', () => {
    const obj = {
      response: {
        data: 6
      }
    }
    const result = isErrorResponse(obj);
    expect(result).toBe(false);
  });

  test('isErrorResponse 5', () => {
    const obj = {
      response: {
        data: {
          errorCode: 5,
          message: "hello"
        }
      }
    }
    const result = isErrorResponse(obj);
    expect(result).toBe(true);
  });

});
