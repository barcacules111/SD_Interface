(function() {
  'use strict'

  angular
    .module('MyApp')
    .factory('fileService');

  fileService.$inject = ['$websocket']

  function fileService($websocket) {
     var dataStream = $websocket('wss://localhost:8000');

     var collection = [];

     dataStream.onMessage(function(message) {
      collection.push(JSON.parse(message.data))
     });

    // Interface
     return {
      collection : collection,
      getFile : getFile
     }
    //

    function getFile(cmd, data) { 
      dataStream.send(JSON.stringify({ 
      type: 'getFile' 
      parameters: {
            "cmd" : "getFile"
            "data" : "path\to\file"
          }
      })) 
      }
  }

})();
