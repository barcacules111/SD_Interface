(function() {
  'use strict'

  angular
    .module('MyApp')
    .factory('dirsService');

  dirsService.$inject = ['$websocket']

  function dirsService($websocket) {
     var dataStream = $websocket('wss://localhost:8000');

     var collection = [];

     dataStream.onMessage(function(message) {
      collection.push(JSON.parse(message.data))
     });

    // Interface
     return {
      collection : collection,
      getDirs : getDirs
     }
    //

    function getDirs(cmd) { 
      dataStream.send(JSON.stringify({ 
      type: 'getDirs' 
      parameters: {
            "cmd" : "getDirs"
          }
      })) 
      }
  }

})();