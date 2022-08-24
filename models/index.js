// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_name',
  onDelete: 'SET NULL',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_name',
  onDelete: 'SET NULL',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  unique: true
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  unique: true
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
