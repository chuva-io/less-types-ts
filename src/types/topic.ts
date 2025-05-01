/**
 * Represents a message published to a topic.
 */
export interface Message {
  [key: string]: any; // Dynamic payload structure
}

/**
 * Represents a subscriber function for processing topic messages.
 */
export type Handler = (message: Message) => Promise<void> | void;
