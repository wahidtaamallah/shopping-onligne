import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTopProducts } from 'store/product-top/actions';

import Banner from './Banner';
// import Cards from './Cards';
import HomeProductList from './HomeProductList';
import { Spinner, Error } from 'components/shared';

const Home = ({ products, loadTopProducts, error, loading }) => {
  useEffect(() => {
    loadTopProducts();
  }, [loadTopProducts]);

  return (
    <div className='home'>
      <Banner />
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <HomeProductList products={products} />
      )}
      {/* <Cards /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productTopApp.products,
  loading: state.productTopApp.loading,
  error: state.productTopApp.error,
});
const mapDispatchToProps = {
  loadTopProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
