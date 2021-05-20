'use strict';

const artistData = [
  {
    first_name: 'Anthony',
    last_name: 'Manganiello',
    profileImage: 'https://avatars.githubusercontent.com/u/80987583?s=400&u=11d71429cc8658512b937308b36d9c1ad89b16aa&v=4',
    email: 'anthonymanganielloDA@gmail.com',
    city: 'Brooklyn',
    state: 'NY',
    age: 25,
    bio: 'Brooklyn-based software engineer, music industry professional, & wannabe DJ pretending to be an artist for his second software engineering project. Is software art? Are galleries showing software? Who knows.',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Ben',
    last_name: 'Sutkiewicz',
    profileImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    email: 'artisttest2@test.com',
    city: 'Brooklyn',
    state: 'NY',
    age: 25,
    bio: 'Graphic designer, minimalist with a focus in portaiture and pop-art. I make my own work but also do commissions, feel free to reach out.',
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Andy',
    last_name: 'Polk',
    profileImage: 'https://rapfiesta.com/wp-content/uploads/2020/05/img_1901-1.jpg',
    email: 'artisttest3@test.com',
    city: 'Brooklyn',
    state: 'NY',
    age: 25,
    bio: 'Full-time musician but I dabble in painting. My specialty is drip-painting on materials both conventional and unconventional. Canvasses include standard canvas, clothing, tiles, and glass',
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Jean-Michel',
    last_name: 'Basquiat',
    profileImage: 'https://i.guim.co.uk/img/media/4623d5a4bcbf49278b927b6e841058643d929260/578_1201_4040_2424/master/4040.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0b7ef5a8f4a21a6d047093e43980be03',
    email: 'artisttest4@test.com',
    city: 'New York',
    state: 'NY',
    age: 27,
    bio: 'Legendary street artist pushing his way into the high art world. I dated Madonna for a while. My paintings are both jarring and endearing, many call me an important figure in the neo-expressionist movement',
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Thomas',
    last_name: 'Portnoy',
    profileImage: 'https://images.unsplash.com/photo-1579983926774-399a9cb765c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    email: 'artisttest5@test.com',
    city: 'Milwaulkee',
    state: 'WI',
    age: 38,
    bio: 'Photographer, hiker, northern explorer. I love photographing the Great Lakes and the treasures found within. You can find austere sunset shots and underwater shipwrecks in my portfolio.',
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Sheila',
    last_name: 'Lopez',
    profileImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    email: 'artisttest6@test.com',
    city: 'Memphis',
    state: 'TN',
    age: 44,
    bio: 'Abstract sculpture artist. I mold forms from clay, chisel marble, fire glass, and weld metal because I can literally make sculptures out of anything. Finding new materials to sculpt with is my passion, and I hope every single day that a new metal or stone is discovered so I can make an incredible sculpture from it.',
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Danielle',
    last_name: 'Williams',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    email: 'artisttest7@test.com',
    city: 'Little Rock',
    state: 'AR',
    age: 29,
    bio: 'I drive down to Louisiana twice every month to photograph the Bayou lifestyle. My work is slice of life, catching a unique landscape and charming people with my camera. My favorite shots include some interactions between humans and nature.',
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Jessie',
    last_name: 'Ballard',
    profileImage: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    email: 'artisttest8@test.com',
    city: 'Boulder',
    state: 'CO',
    age: 54,
    bio: 'I climb mountains with my paintbrush and canvas on my back. There is no better place to paint than thousands of feet above the clouds I love landscapes and yearn to detail my trees as perfectly as the great Bob Ross, though I could never achieve his impressive afro ',
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Aditi',
    last_name: 'Singh',
    profileImage: 'https://images.unsplash.com/photo-1586425225143-0c8f59053610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=310&q=80',
    email: 'artisttest9@test.com',
    city: 'Cleveland',
    state: 'OH',
    age: 22,
    bio: 'Avant-garde sketch artist. My portaits are daring and unsettling. They challenge you to think about what a human can be and how the brain can abstract, alter, and change its mind on what it believes is human',
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Carmen',
    last_name: 'Bevelacqua',
    profileImage: 'https://images.unsplash.com/photo-1607151658386-305a46a8834a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    email: 'artisttest10@test.com',
    city: 'Eugene',
    state: 'OR',
    age: 84,
    bio: 'Risograph printmaker. I use a Riso EZ200 to make bright, colorful designs with intense shapes and a valiant attention to detail. I have been working with printers for 60 years and consider myself a master of the form.',
    userId: 10,
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
     await queryInterface.bulkInsert('artists', artistData, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('artists', null, {});

  }
};
