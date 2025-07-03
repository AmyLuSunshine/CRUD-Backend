const db = require('./db');
const { Campus, Student } = require('../models'); // Adjust path if needed

const seed = async () => {
  try {
    await db.sync({ force: true }); // Reset tables

    // Create campuses
    const [cityTech, hunter] = await Promise.all([
      Campus.create({
        name: 'City Tech',
        imageUrl: 'https://via.placeholder.com/150',
        address: 'Brooklyn, NY',
        description: 'City University of New York - City Tech',
      }),
      Campus.create({
        name: 'Hunter College',
        imageUrl: 'https://via.placeholder.com/150',
        address: 'Manhattan, NY',
        description: 'City University of New York - Hunter',
      }),
    ]);

    // Create students and associate them with campuses
    const students = await Promise.all([
      Student.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        gpa: 3.6,
        campusId: cityTech.id, // associate with City Tech
      }),
      Student.create({
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        gpa: 3.9,
        campusId: hunter.id, // associate with Hunter
      }),
      Student.create({
        firstName: 'Alex',
        lastName: 'Jones',
        email: 'alex@example.com',
        gpa: 3.2,
        // No campusId = not enrolled
      }),
    ]);

    console.log(`🏫 Created ${[cityTech, hunter].length} campuses`);
    console.log(`🎓 Created ${students.length} students`);

    await db.close();
    console.log('✅ Seeded and closed database');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  }
};

seed();
