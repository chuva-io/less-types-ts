/**
 * Represents the object passed to the cloud function.
 */
export interface Message {
  [key: string]: any; // Dynamic payload structure
}

/**
 * Represents the cloud function.
 */
export type Handler = (message: Message) => Promise<void> | void;
