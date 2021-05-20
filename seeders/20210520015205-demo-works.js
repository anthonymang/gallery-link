'use strict';

const workData = [
  {
    title: 'What is Art?',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/300',
    discipline: 'digital',
    artistId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Creation',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/700',
    discipline: 'digital',
    artistId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Not Software',
    yearCreated: 2018,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'digital',
    artistId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Something Different',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'digital',
    artistId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Recency',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/400',
    discipline: 'digital',
    artistId: 1,
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Overdone',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'digital',
    artistId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'A New Life',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/800/700',
    discipline: 'digital',
    artistId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Far Away',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/800',
    discipline: 'digital',
    artistId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Downtown',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'digital',
    artistId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Elevation',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/700',
    discipline: 'digital',
    artistId: 2,
    userId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Lay Low',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'painting',
    artistId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Jasmine',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'painting',
    artistId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Burnout',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/600',
    discipline: 'painting',
    artistId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Pins & Needles",
    yearCreated: 2018,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'painting',
    artistId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Twenty Three',
    yearCreated: 2018,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/400',
    discipline: 'painting',
    artistId: 3,
    userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Crown',
    yearCreated: 1981,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/600',
    discipline: 'painting',
    artistId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Untitled (Boxer)',
    yearCreated: 1982,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/500',
    discipline: 'painting',
    artistId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'In This Case',
    yearCreated: 1983,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/400',
    discipline: 'painting',
    artistId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Self Portrait',
    yearCreated: 1984,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/600',
    discipline: 'painting',
    artistId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Warrior',
    yearCreated: 1985,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/800',
    discipline: 'painting',
    artistId: 4,
    userId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Superior',
    yearCreated: 2004,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/800/600',
    discipline: 'photography',
    artistId: 5,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Huron',
    yearCreated: 2014,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/700',
    discipline: 'photography',
    artistId: 5,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Michigan',
    yearCreated: 2006,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/350/350',
    discipline: 'photography',
    artistId: 5,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Erie',
    yearCreated: 2010,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'photography',
    artistId: 5,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Ontario',
    yearCreated: 2008,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/400',
    discipline: 'photography',
    artistId: 5,
    userId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Vase',
    yearCreated: 1993,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'sculpture',
    artistId: 6,
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'My David',
    yearCreated: 2001,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/700',
    discipline: 'sculpture',
    artistId: 6,
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Sleeping Menace',
    yearCreated: 2014,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/500',
    discipline: 'sculpture',
    artistId: 6,
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Breathe',
    yearCreated: 1997,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/300',
    discipline: 'sculpture',
    artistId: 6,
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Edge',
    yearCreated: 1999,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/500',
    discipline: 'sculpture',
    artistId: 6,
    userId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Bayou',
    yearCreated: 2012,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'photography',
    artistId: 7,
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'New Orleans',
    yearCreated: 2015,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'photography',
    artistId: 7,
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Crawfish & Man',
    yearCreated: 2016,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/700',
    discipline: 'photography',
    artistId: 7,
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Swamp',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/600',
    discipline: 'photography',
    artistId: 7,
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Joy of Fishing',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'photography',
    artistId: 7,
    userId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Colorado Mountains',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/600',
    discipline: 'painting',
    artistId: 8,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'The Rockies',
    yearCreated: 2004,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'painting',
    artistId: 8,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Snowy Peaks',
    yearCreated: 1992,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/400',
    discipline: 'painting',
    artistId: 8,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Cloudy Day',
    yearCreated: 2015,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/600',
    discipline: 'painting',
    artistId: 8,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Trek',
    yearCreated: 1988,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/600',
    discipline: 'painting',
    artistId: 8,
    userId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Baby',
    yearCreated: 2019,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/600/500',
    discipline: 'drawing',
    artistId: 9,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Parents',
    yearCreated: 2020,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/300/300',
    discipline: 'drawing',
    artistId: 9,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Fear',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/700',
    discipline: 'drawing',
    artistId: 9,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Growing Pains',
    yearCreated: 2017,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/700/500',
    discipline: 'drawing',
    artistId: 9,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Inhale, Exhale',
    yearCreated: 2021,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/500',
    discipline: 'drawing',
    artistId: 9,
    userId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Valiance',
    yearCreated: 1981,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/300/500',
    discipline: 'printmaking',
    artistId: 10,
    userId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Bold & Brash',
    yearCreated: 2000,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/400/300',
    discipline: 'printmaking',
    artistId: 10,
    userId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'To Float',
    yearCreated: 1997,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/500/300',
    discipline: 'printmaking',
    artistId: 10,
    userId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Thief',
    yearCreated: 1987,
    description: "Quisque eget vehicula nisl. Proin id elementum augue. Pellentesque vitae lectus sapien. Morbi vitae libero eu odio vulputate sollicitudin ut at odio. Suspendisse sed erat rutrum lorem malesuada cursus. Sed in vehicula velit. Nunc eleifend quis tortor vitae venenatis. Morbi facilisis malesuada ipsum, ac fermentum orci pharetra id. Aenean semper.",
    imageFile: 'https://picsum.photos/200/300',
    discipline: 'printmaking',
    artistId: 10,
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
     await queryInterface.bulkInsert('works', workData, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('works', null, {});

  }
};
