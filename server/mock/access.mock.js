/**
 * Populate DB with sample data on Accesss
 */

'use strict';

var Access = require('../api/access/access.model');

Access.find({}).remove(function() {
    var date = new Date();
    date.setDate(date.getDate() + 30);
    Access.create({
      system: { _id: '56582d8e9123a5705eaf0e72' },
    	user: { _id: '55b77647a8d5d3070db4e892' },
      status: 'ativo',
      group: 'usuario',
      date: date 
    }, { 
      system: { _id: '56582d8e9123a5705eaf0e72' },
      user: { _id: '55b77647a8d5d3070db4e893' },
      status: 'ativo',
      group: 'adminitrator',
      date: date
    }, function() {
        console.log('finished populating accesss');
    });
});
