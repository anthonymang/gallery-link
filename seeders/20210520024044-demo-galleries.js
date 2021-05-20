'use strict';

const galleryData = [
  {
    name: 'Happy Gallery',
    profileImage: 'https://www.tripsavvy.com/thmb/VPYlfEARBBZbqwu3aGl9a7VfLHg=/3000x1687/smart/filters:no_upscale()/GettyImages-472768194-5d167ebc1a634312b25a98ca5d6613f9.jpg',
    phone_number: '(111)111-1111',
    address: '123 North South Street',
    city: 'Houston',
    state: 'TX',
    zipcode: 11111,
    owner: 'Don Happy',
    email: 'gallerytest1@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Seasons',
    profileImage: 'https://www.parkwestgallery.com/wp-content/uploads/2021/01/slider_vegas.jpg',
    phone_number: '(222)222-2222',
    address: '1312 Season Drive',
    city: 'Tampa Bay',
    state: 'FL',
    zipcode: 22222,
    owner: 'Brenda Sloan',
    email: 'gallerytest2@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Malcolm Gallery',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWVoyF3VZUqOBbdq4bxhLTnaoUOl56VYFIw&usqp=CAU',
    phone_number: '(333)333-3333',
    address: '88 Bryan Lane',
    city: 'New Orleans',
    state: 'LA',
    zipcode: 33333,
    owner: 'Bradley Malcolm',
    email: 'gallerytest3@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Superchief Gallery',
    profileImage: 'http://muchobliged.tv/wp-content/uploads/2016/08/83f6c8_e76aab3fbda14d4d954f9e97a746aaf6_mv2.png',
    phone_number: '(444)444-4444',
    address: '99 Spring Street',
    city: 'New York',
    state: 'NY',
    zipcode: 19112,
    owner: 'Super Chief',
    email: 'gallerytest4@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Galleria 27th Street',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJYWCo1K8kIMW0ngFbEO3-Ifb68D_YM83uA&usqp=CAU',
    phone_number: '(555)555-5555',
    address: '198 E. 27th Street',
    city: 'New York',
    state: 'NY',
    zipcode: 17958,
    owner: 'Tia Walker',
    email: 'gallerytest5@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Brash Gallery',
    profileImage: 'https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    phone_number: '(666)666-6666',
    address: '11 Woodward Avenue',
    city: 'Detroit',
    state: 'MI',
    zipcode: 48888,
    owner: 'Billy Brash',
    email: 'gallerytest6@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'New York Armory',
    profileImage: 'https://sites.rowan.edu/artgallery/_images/saya_woolfalk/swgalleryview4.jpeg',
    phone_number: '(777)777-7777',
    address: 'Pier 94',
    city: 'New York',
    state: 'NY',
    zipcode: 11212,
    owner: 'Todd Packard',
    email: 'gallerytest7@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Milwaukee Artspace',
    profileImage: 'https://artlogic-res.cloudinary.com/w_1600,h_1000,c_fill,f_auto,fl_lossy,q_auto:good/ws-halcyon/usr/images/feature_panels/image/610/dsc_3994-copy.jpg',
    phone_number: '(888)888-8888',
    address: '220 Main Street',
    city: 'Milwaukee',
    state: 'WI',
    zipcode: 55555,
    owner: 'Shania Twine',
    email: 'gallerytest8@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Zwirner Denver',
    profileImage: 'https://media.istockphoto.com/photos/art-exibition-lot-3d-visualization-picture-id1131101048?k=6&m=1131101048&s=612x612&w=0&h=kKTEu8Nwa30d0MokJ1dkPM2jnKCuYGfbgOKdCscb9gQ=',
    phone_number: '(999)999-9999',
    address: '2098 Mountain Road',
    city: 'Denver',
    state: 'CO',
    zipcode: 29392,
    owner: 'David Zwirner',
    email: 'gallerytest9@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dark Space',
    profileImage: 'https://static01.nyt.com/images/2021/05/19/arts/19vassell-gallery-2/merlin_187903353_b1afa9bb-36c5-4d3c-8bc0-7f7993b79b1b-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    phone_number: '(212)222-1111',
    address: 'Secret Location',
    city: 'Chicago',
    state: 'IL',
    zipcode: 83859,
    owner: "Shaquille O'Neal",
    email: 'gallerytest10@test.com',
    description: 'Nulla bibendum ornare ex, a tempus nunc vestibulum hendrerit. Nulla et purus id urna mattis gravida sed non neque. Nullam feugiat urna id nunc eleifend, ut euismod velit mollis. Mauris varius odio a purus pulvinar, ut tincidunt mi vestibulum. Phasellus at dui fermentum erat consectetur tincidunt. Suspendisse a elit diam.',
    userId: 20,
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
     await queryInterface.bulkInsert('galleries', galleryData, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('galleries', null, {});

  }
};
