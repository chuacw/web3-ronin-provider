import { ERROR_EMPTY_HEADERS, ERROR_EMPTY_URL, ERROR_NO_API_KEY, ERROR_NO_HEADERS } from "./web3-ronin-consts";

/**
 * An error indicating no API key is provided
 *
 * @class ENoApiKey
 * @typedef {ENoApiKey}
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
 * @class EEmptyUrl
 * @typedef {EEmptyUrl}
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
 * @class ENoHeaders
 * @typedef {ENoHeaders}
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
 * @class EEmptyHeaders
 * @typedef {EEmptyHeaders}
 * @extends {Error}
 */
class EEmptyHeaders extends Error {
  constructor() {
    super(ERROR_EMPTY_HEADERS);
  }
}

export {
  EEmptyHeaders,
  EEmptyUrl,
  ENoApiKey,
  ENoHeaders
}