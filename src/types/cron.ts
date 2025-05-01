/**
 * Represents a CRON job.
 */
export type Handler = () => Promise<void> | void;
