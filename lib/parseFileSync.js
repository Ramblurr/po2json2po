var fs = require("fs");

/**
 * Synchronously parse a PO file to JSON
 *
 * @param {String} fileName - File name
 * @param {Object} [options]
 * @return {Object|String} Translation JSON
 */

module.exports = function(fileName, options) {
  var when = require('when');

  var data = fs.readFileSync(fs.realpathSync(fileName));

  return when.promise(function(resolve, reject, notify) {
      if(fileName.indexOf(".json") === fileName.length - 5) {
          resolve(require("./parseJSON")( fileName, options ));
      } else if(fileName.indexOf(".js") === fileName.length - 3) {
          resolve(require("./parseJS")( fileName, options ));
      } else {
          resolve(require("./parse")( data, options ));
      }
  });
};
