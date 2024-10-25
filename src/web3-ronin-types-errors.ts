import { ERROR_EMPTY_HEADERS, ERROR_EMPTY_URL, ERROR_NO_API_KEY, ERROR_NO_HEADERS } from "./web3-ronin-consts";

/**
 * An error indicating no API key is provided
 *
 * @extends {Error}
 */
class ENoApiKey extends Error {
  constructor() {
    super(ERROR_NO_API_KEY);
  }
}

/**
 * An error indicating that the URL is empty
 *
 * @extends {Error}
 */
class EEmptyUrl extends Error {
  constructor() {
    super(ERROR_EMPTY_URL);
  }
}

/**
 * An error indicating headers are not provided
 *
 * @extends {Error}
 */
class ENoHeaders extends Error {
  constructor() {
    super(ERROR_NO_HEADERS);
  }
}

/**
 * An error indicating that headers were provided, but it's empty!
 *
 * @extends {Error}
 */
class EEmptyHeaders extends Error {
  constructor() {
    super(ERROR_EMPTY_HEADERS);
  }
}

/**
 * An error indicating the error code and message
 */
class EErrorCodeMessage extends Error {
  
  /**
   * The error code
   *
   * @type {number}
   */
  errorCode: number;
  constructor(errorCode: number, message: string) {
    super(message);
    this.errorCode = errorCode;
  }
}

export {
  EEmptyHeaders,
  EEmptyUrl,
  ENoApiKey,
  ENoHeaders,
  EErrorCodeMessage
}