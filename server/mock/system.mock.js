/**
 * Populate DB with sample data on Systems
 */

'use strict';

var System = require('../api/system/system.model');

System.find({}).remove(function() {
    var date = new Date();
    date.setDate(date.getDate() + 30);
    System.create({
    	_id: '56582d8e9123a5705eaf0e72',
        name: 'Minha Consulta',
        description: 'Sistema para gereciamento de consultas, e para o controle financeiro e emissão de boletos.'
    }, function() {
        console.log('finished populating systems');
    });
});
