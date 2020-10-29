import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { loadProduct } from 'store/product/actions';
import { updateProduct, resetProduct } from 'store/product-update/actions';

import Checkbox from '@material-ui/core/Checkbox';
import { Spinner, Error } from 'components/shared';

const ProductEdit = ({
  user,
  history,
  match,
  loadProduct,
  product,
  loading,
  error,
  updateProduct,
  resetProduct,
  successProductUpdate,
  loadingProductUpdate,
  errorProductUpdate,
}) => {
  const productId = match.params.id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(false);
  const [countInStock, setCountInStock] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');

  const [uploading, setUploading] = useState();

  useEffect(() => {
    if (successProductUpdate) {
      resetProduct();
      history.push('/admin/productlist');
    } else {
      if (!product.title || product._id !== productId) loadProduct(productId);
      else {
        setTitle(product.title);
        setDescription(product.description);
        setCategory(product.category);
        setPrice(product.price);
        setInStock(product.inStock);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setBrand(product.brand);
      }
    }
  }, [
    product,
    productId,
    loadProduct,
    successProductUpdate,
    history,
    resetProduct,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    updateProduct({
      _id: productId,
      title,
      description,
      category,
      price,
      inStock,
      countInStock,
      image,
      brand,
    });
  };

  const onUploadFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const { data } = await axios.post('/api/upload', formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <>
      <p
        className='userEdit_nav'
        onClick={() => history.push('/admin/productlist')}
      >
        &#8592; Back to Products
      </p>
      <div className='auth__container center__container'>
        <h1>Product Details</h1>
        {loadingProductUpdate && <Spinner />}
        {errorProductUpdate && <Error error={errorProductUpdate} />}
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error error={error} />
        ) : (
          <form onSubmit={onSubmit}>
            <h5>Title</h5>
            <input
              name='title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h5>Description</h5>
            <textarea
              rows='8'
              name='description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h5>Category</h5>
            <input
              name='category'
              type='text'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <h5>Price</h5>
            <input
              name='price'
              min='0'
              step='0.01'
              type='number'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className='checkbox'>
              <h5>In Stock</h5>
              <Checkbox
                checked={inStock}
                color='default'
                onChange={(event) => setInStock(event.target.checked)}
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
            </div>
            <h5>Count in Stock</h5>
            <input
              name='countInStock'
              min='0'
              type='number'
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />
            <h5>Image</h5>
            <input
              name='image'
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type='file'
              id='image-file'
              label='Choose file'
              onChange={onUploadFile}
            />
            {uploading && <Spinner />}
            <h5>Brand</h5>
            <input
              name='brand'
              type='text'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <button type='submit' className='auth__signInButton'>
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  product: state.mainApp.product,
  loading: state.mainApp.loading,
  error: state.mainApp.error,
  successProductUpdate: state.productUpdateApp.success,
  loadingProductUpdate: state.productUpdateApp.loading,
  errorProductUpdate: state.productUpdateApp.error,
});
const mapDispatchToProps = {
  loadProduct,
  updateProduct,
  resetProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
