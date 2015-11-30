/**
 * Populate DB with sample data on Systems
 */

'use strict';

var System = require('../api/system/system.model');

System.find({}).remove(function() {
    System.create({
    	_id: '56582d8e9123a5705eaf0e72',
        name: 'Minha Consulta',
        description: 'Sistema para gereciamento de consultas, e para o controle financeiro e emissão de boletos.',
        users: [ { user: { _id: '55b77647a8d5d3070db4e892' } },
                 { user: { _id: '55b77647a8d5d3070db4e893' } }  ]
    }, function() {
        console.log('finished populating systems');
    });
});
