/**
 * Represents a WebSocket connection message.
 */
export type ConnectionMessage = {
  /**
   * The unique client connection id.
   */
  connection_id: string;
};

/**
 * Represents a WebSocket disconnection message.
 */
export type DisconnectionMessage = ConnectionMessage;

/**
 * Represents a WebSocket connection function.
 */
export type ConnectionHandler = (message: ConnectionMessage) => void;

/**
 * Represents a WebSocket disconnection function.
 */
export type DisconnectionHandler = (message: DisconnectionMessage) => void;
