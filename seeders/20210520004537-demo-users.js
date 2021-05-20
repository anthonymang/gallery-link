'use strict';

const userData = [
  {
    email: 'anthonymanganielloDA@gmail.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest2@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest3@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest4@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest5@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest6@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest7@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest8@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest9@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'artisttest10@test.com',
    password: 'password',
    usertype: 'artist',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest1@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ,
  {
    email: 'gallerytest2@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest3@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest4@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest5@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest6@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest7@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest8@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest9@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    email: 'gallerytest10@test.com',
    password: 'password',
    usertype: 'gallery',
    setupComplete: 'true',
    createdAt: new Date(),
    updatedAt: new Date()
}
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('users', userData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
