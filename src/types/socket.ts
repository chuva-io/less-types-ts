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
 * Represents a WebSocket channel message.
 */
export type ChannelMessage = {
  /**
   * The unique client connection id.
   */
  connection_id: string;

  /**
   * The payload sent by the client.
   */
  data: any;
};

/**
 * Represents a WebSocket connection function.
 */
export type ConnectionHandler = (message: ConnectionMessage) => void;

/**
 * Represents a WebSocket disconnection function.
 */
export type DisconnectionHandler = (message: DisconnectionMessage) => void;

/**
 * Represents a WebSocket channel function.
 */
export type ChannelHandler = (message: ChannelMessage) => void;
