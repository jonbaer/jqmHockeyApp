// HockeyApp.js

//  Created by Owen Brotherwood on 8/24/11.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//


var HockeyApp = (function() {  
	checkForUpdate = function() { // only works with default HockeyKit defaults and not the experimental above
        PhoneGap.exec("HockeyApp.checkForUpdate");
    },
    
    isUpdateAvailable = function(cb) { // provide a function that can be called back with result: ''/1
        PhoneGap.exec("HockeyApp.isUpdateAvailable", GetFunctionName(cb)); 
    },
    
    showCheckForUpdateAlert = function(){
        PhoneGap.exec("HockeyApp.showCheckForUpdateAlert");
    },
    
    initiateAppDownload = function(){   // has a return boolean which could be used
        PhoneGap.exec("HockeyApp.initiateAppDownload");
    },
    
    crashTest = function() {
        PhoneGap.exec("HockeyApp.crashTest");
    },
                                
    init = function(args){
        PhoneGap.exec("HockeyApp.init", args);
    };
    
    return{
        checkForUpdate :        checkForUpdate,         // causes a requester if new software is found
        crashTest :             crashTest,              // cause crash to test QuincyKit
        isUpdateAvailable :     isUpdateAvailable,      // checks if new software is available
        showCheckForUpdateAlert: showCheckForUpdateAlert,
        initiateAppDownload :   initiateAppDownload,    // causes an requester for download of new software
        init :                  init                    // called before use
    };

})();


/*
 I want init to have a cb that is fired when there isUpdateAvailable, another parameter would be how often to check.
 The check would mean a checkForUpdate (with any HockeyKit Alerts suppressed as an option): then the choice would be to color a div or any other method to indicate that an update is available. Then initiateAppDownload at "some time", dependant on the App Designer and User
*/