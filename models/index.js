const Campus = require('./Campus');
const Student = require('./Students');

// One-to-many association
Campus.hasMany(Student, { foreignKey: 'campusId' });
Student.belongsTo(Campus, { foreignKey: 'campusId' });

module.exports = { Campus, Student };
