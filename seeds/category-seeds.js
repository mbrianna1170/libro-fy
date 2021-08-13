const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Childrens Books',
  },
  {
    category_name: 'Fantasy/Sci-Fi',
  },
  {
    category_name: 'Action/Adevnture',
  },
  {
    category_name: 'Crime/Mystery',
  },
  {
    category_name: 'Classics',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;