/**
 * This class replaces console.log for a more standardized
 * way of logging.
 */

// Local Imports
import { Environment } from './environment';

/**
 * StOut escape code for resetting formatting.
 */
export const STD_OUT_ESCAPE_CODE_RESET = '\x1b[0m';

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_NAME_FORMATING: Record<string, string> = {
  0: '\x1b[90m', // DEBUG
  1: '\x1b[91m', // WARNING
  2: '\x1b[33m', // UPDATE
};

/**
 * Format for different monitor layers.
 */
export const STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING: Record<string, string> = {
  0: '\x1b[90m', // DEBUG
  1: '\x1b[37m', // WARNING
  2: '\x1b[37m', // UPDATE
};

/**
 * Proxy to console.
 */
export class Monitor {
  /**
   * Layers of monitor output.
   */
  static Layer: Record<string, number> = {
    DEBUG: 0,
    WARNING: 1,
    UPDATE: 2,
  };

  /**
   * Whether the debug layer is active.
   */
  static _debugLayerActive = Environment.isDebugLayerEnabled();

  /**
   * Whether the warning layer is active.
   */
  static _warningLayerActive = Environment.isWarningLayerEnabled();

  /**
   * Whether the update layer is active.
   */
  static _updateLayerActive = Environment.isUpdateLayerEnabled();

  /**
   * Print a statement to the console.
   *
   * @param {string} text Text to be printed.
   * @param {number} layer Layer to print text to.
   */
  static log(
    source: any,
    text: string,
    layer = 0,
  ) {
    if (Monitor._shouldLog(layer)) {
      console.log(
        `${STD_OUT_MONITOR_LAYER_NAME_FORMATING[`${layer}`]}[${source.name}]:${STD_OUT_ESCAPE_CODE_RESET}`,
        `${STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING[`${layer}`]}${text}${STD_OUT_ESCAPE_CODE_RESET}`,
      );
    }
  }

  /**
   * Print a trace statement to the console.
   *
   * @param {string} text Text to be printed.
   * @param {number} layer Layer to print text to.
   */
  static trace(
    source: any,
    text: string,
    layer = 0,
  ) {
    if (Monitor._shouldLog(layer)) {
      console.trace(
        `${STD_OUT_MONITOR_LAYER_NAME_FORMATING[`${layer}`]}[${source.name}]:${STD_OUT_ESCAPE_CODE_RESET}`,
        `${STD_OUT_MONITOR_LAYER_MESSAGE_FORMATING[`${layer}`]}${text}${STD_OUT_ESCAPE_CODE_RESET}`,
      );
    }
  }

  /**
   * Displays memory update.
   */
  static logMemory() {
    const mbUsed = Math.round(process.memoryUsage().heapUsed / 1024 / 10.24) / 100;

    Monitor.log(
      Monitor,
      `Memory in Use: ${mbUsed} MB`,
      Monitor.Layer.WARNING,
    );
  }

  /**
   * Returns whether or not the layer is active.
   * @param {number} layer Monitor layer.
   * @returns {boolean} Whether the layer is active.
   */
  static _shouldLog(layer: number) {
    if (layer === Monitor.Layer.DEBUG) {
      return Monitor._debugLayerActive;
    } if (layer === Monitor.Layer.WARNING) {
      return Monitor._warningLayerActive;
    }
    return Monitor._updateLayerActive;
  }
}
