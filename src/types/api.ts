/**
 * Represents HTTP headers as a key-value pair object.
 */
export type Headers = { [key: string]: string };

/**
 * Represents the HTTP path parameters.
 */
export type PathParams = { [key: string]: string };

/**
 * Represents the HTTP query parameters.
 */
export type QueryParams = { [key: string]: string };

/**
 * Represents the HTTP request body as a string.
 */
export type Body = string;

/**
 * Represents the HTTP status code as a number.
 */
export type StatusCode = number;

/**
 * Represents an HTTP API request.
 */
export interface Request {
  body?: Body;
  headers: Headers;
  params: PathParams;
  query: QueryParams;
  // Dynamic request structure.
  // This allows for additional properties to be added to the request object.
  [key: string]: any;
}

/**
 * Represents an HTTP API response.
 */
export interface Response {
  body?: Body;
  headers: Headers;
  statusCode: StatusCode;
}

export type NextFunction = () => void;
export type Middleware = (request: Request, response: Response, next: NextFunction) => Promise<Response | void> | Response | void;

export type Middlewares = Middleware[];

/**
 * Represents an HTTP API handler function.
 */
export type Handler = (request: Request, response: Response) => Promise<Response> | Response;
