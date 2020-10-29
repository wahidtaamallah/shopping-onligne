const Product = require('../../models/product');

getProducts = async (req, res) => {
  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;

  const text = req.query.search
    ? { title: { $regex: req.query.search, $options: 'i' } }
    : {};

  const count = await Product.countDocuments({ ...text });
  const products = await Product.find({ ...text })
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
};

getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else {
    res.status(404);
    throw new Error('Product not found');
  }
};

deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

addProduct = async (req, res) => {
  const product = new Product({
    title: 'Sample Product Name',
    price: 0,
    user: req.user._id,
    image: '/images/placeholder.png',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    inStock: false,
    numReviews: 0,
    description: 'Sample Description',
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

updateProduct = async (req, res) => {
  const {
    title,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    inStock,
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.category = category;
    product.countInStock = countInStock;
    product.inStock = inStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

addReviewToProduct = async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review Added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
};

getTopProducts = async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(6);
  res.json(products);
};

module.exports = {
  getProducts,
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
  addReviewToProduct,
  getTopProducts,
};
