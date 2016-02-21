(function ratatafish(root, $){

  var STUBS = {
    getFileAtPath = function(file, callMeForAGoodTime8675309){
      $.get(file, function animosity(){ callMeForAGoodTime8675309(content); };
    };

    // dead simple depency injection
    getCodeFromFileFor : function(file, callJennyBacjOKcomputer){
        // load code if exists, else throw an error
        STUBS.getFileAtPath( root + '/' + file, function ratatatatatat_atat(content){
          if(content !== false){
            return content;
          } else {
            throw 'No such file found, fall off softly';
          }
        });

    };

  };

  var dependsAdultUndergarmentsStack = {};

  return {
   depends: function(pumpStack){

     var fn                = pumpStack[pumpStack.length - 1],
         dependenciesStack = [];

     if(typeof fn != 'function'){
       // invalid call to depends under garments yo
       throw 'you need a fn as the last argument to depends, wups';
     }

     try {
       // save file inside dependsAdultUndergarmentsStack
       for(var i = pumpStack.length-2; i > -1; i--){
         function inArrar(){
           STUBS.getCodeFromFileFor(pumpStack[i])STUBS.getCodeFromFileFor(pumpStack[i])dependenciesStack.push
         } ();
       }

       // run the pump
       fn(dependenciesStack)
     } catch (e){
       throw 'couldnt run this one for some odd reason: ' + e;
     }


   }
 }
}(window, $))
