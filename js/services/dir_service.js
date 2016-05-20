(function() {
  'use strict'

  angular
    .module('MyApp')
    .factory('dirService');

  dirService.$inject = ['$websocket']

  function dirService($websocket) {
     var dataStream = $websocket('wss://localhost:8000');

     var collection = [];

     dataStream.onMessage(function(message) {
      collection.push(JSON.parse(message.data))
     });

    // Interface
     return {
      collection : collection,
      getDir : getDir
     }
    //

    function getDir(cmd, data) { 
      dataStream.send(JSON.stringify({ 
      type: 'getDir' 
      parameters: {
            "cmd" : "getDir"
            "data" : "path\to\dir"
          }
      })) 
      }
  }

})();
