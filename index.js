/**
 * @file index.js
 * @version 0.1.0
 * @author ymargreth
 * @description
 * Default script in 'spotify-web-api-scriptable'
 * Serves as an entry point to the 'spotify-web-api-scriptable'-library.
 * loads `spotify-web-api.js` and exports it
 */

/**
 * export the function to import the loader
 */
module.exports = importModule("/src/spotify-web-api.js");

/**
 * Calling Script.complete() signals to Scriptable that the script have finished running.
 * This can speed up the execution, in particular when running the script from Shortcuts or using Siri.
 * It is not necessary to call this function, but it is recommended.
 */
Script.complete();
