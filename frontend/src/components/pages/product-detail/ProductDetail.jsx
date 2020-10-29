import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProduct, clearProduct } from 'store/product/actions';

import { Spinner, Error } from 'components/shared';

import ProductDetailMobile from './ProductDetailMobile';
import ProductDetailNav from './ProductDetailNav';
import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailCenter from './ProductDetailCenter';
import ProductDetailRight from './ProductDetailRight';

import ReviewsList from '../reviews/ReviewsList';

const ProductDetail = ({
  match,
  loadProduct,
  clearProduct,
  product,
  loading,
  error,
  reviewAddSuccess,
  user,
}) => {
  const history = useHistory();
  useEffect(() => {
    const { id } = match.params;
    loadProduct(id);
    return () => {
      clearProduct();
    };
    // eslint-disable-next-line
  }, [loadProduct, reviewAddSuccess]);

  const onAddToCart = (quantity) => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <ProductDetailNav />
          <ProductDetailMobile product={product} onAddToCart={onAddToCart} />
          <div className='productDetail'>
            <ProductDetailLeft product={product} />
            <ProductDetailCenter product={product} />
            <ProductDetailRight product={product} onAddToCart={onAddToCart} />
          </div>
          <ReviewsList product={product} user={user} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.mainApp.product,
  loading: state.mainApp.loading,
  error: state.mainApp.error,
  reviewAddSuccess: state.reviewAddApp.success,
  user: state.userApp.user,
});

const mapDispatchToProps = {
  loadProduct,
  clearProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
