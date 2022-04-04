const Location = require('./location')
const Traveller = require('./traveller')
const Trip = require('./trip')

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
  },
});

module.exports = { Location, Traveller, Trip};