const listings = [
  {
    id: 201,
    title: 'Red jacket',
    images: [require('../assets/listingImages/couch.jpg')],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 3,
    title: 'Gray couch in a great condition',
    images: [require('../assets/listingImages/couch.jpg')],
    categoryId: 1,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 1,
    title: 'Room & Board couch (great condition) - delivery included',
    description:
      'I\'m selling my furniture at a discount price. Pick up at Venice. DM me asap.',
    images: [
      require('../assets/listingImages/couch.jpg'),
      require('../assets/listingImages/couch.jpg'),
      require('../assets/listingImages/couch.jpg')
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 2,
    title: 'Designer wear shoes',
    images: [require('../assets/listingImages/couch.jpg')],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 102,
    title: 'Canon 400D (Great Condition)',
    images: [require('../assets/listingImages/couch.jpg')],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 101,
    title: 'Nikon D850 for sale',
    images: [require('../assets/listingImages/couch.jpg')],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 4,
    title: 'Sectional couch - Delivery available',
    description: 'No rips no stains no odors',
    images: [require('../assets/listingImages/couch.jpg')],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    id: 6,
    title: 'Brown leather shoes',
    images: [require('../assets/listingImages/couch.jpg')],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  }
];

export default listings;
