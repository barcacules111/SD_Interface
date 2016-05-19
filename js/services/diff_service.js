(function() {
  'use strict'

  angular
    .module('MyApp')
    .factory('diffService');

  diffService.$inject = ['$websocket']

  function diffService($websocket) {
     var dataStream = $websocket('wss://localhost:8000');

     var collection = [];

     dataStream.onMessage(function(message) {
      collection.push(JSON.parse(message.data))
     });

    // Interface
     return {
      collection : collection,
      getDiffs : getDiffs
     }
    //

     function getDiffs(libV1Path, libV2Path) {
      dataStream.send(JSON.stringify({
        type: 'getDiffs'
        parameters: {
          libV1Path: libV1Path,
          libV2Path: libV2Path
        }
      }))
     }
  }

})();
