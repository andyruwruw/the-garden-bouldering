// Local Imports
import { Environment } from './helpers/environment';
import { Server } from './server';

/**
 * Desired port from environmental variables.
 */
const PORT = Environment.getPort();

// Start it up!
const server = new Server(PORT);
server.start();
