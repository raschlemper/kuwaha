'use strict';

app.config(function(localStorageServiceProvider) {      
    localStorageServiceProvider
        .setStorageType('sessionStorage')
        .setPrefix('teratec');
});