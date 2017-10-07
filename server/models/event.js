'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

const Event = db.define('event', {
  date: {
    type     : Sequelize.STRING,
    // allowNull: false
  },
  time: {
    type     : Sequelize.STRING,
    allowNull: false
  },
  title: {
    type     : Sequelize.STRING,
    allowNull: false
  },
  description: {
    type     : Sequelize.STRING,
  },
}, {});

module.exports = Event;
