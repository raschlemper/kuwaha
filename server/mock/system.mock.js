/**
 * Populate DB with sample data on Systems
 */

'use strict';

var System = require('../api/system/system.model');

System.find({}).remove(function() {
    System.create({
        name: 'Minha Consulta',
        description: 'Sistema para gereciamento de consultas, e para o controle financeiro e emissão de boletos.'
    }, function() {
        console.log('finished populating systems');
    });
});
