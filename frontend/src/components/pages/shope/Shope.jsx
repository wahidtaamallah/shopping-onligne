import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from 'store/product/actions';

import { Spinner, Error, AppPagination } from 'components/shared';
import ShopeList from './ShopeList';

const Shope = ({
  match,
  products,
  loadProducts,
  error,
  loading,
  pages,
  page,
}) => {
  const text = match.params.text;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    loadProducts(text, pageNumber);
  }, [loadProducts, text, pageNumber]);

  return (
    <>
      <div className='browse__header'>
        {text !== undefined ? (
          <p>
            {page}-{pages} of {products?.length} results for{' '}
            <span>"{text}"</span>
          </p>
        ) : (
          <p>
            {page}-{pages} of {products?.length} results.
          </p>
        )}
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <ShopeList products={products} />
      )}
      <AppPagination pages={pages} page={page} text={text ? text : ''} />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.mainApp.products,
  loading: state.mainApp.loading,
  error: state.mainApp.error,
  pages: state.mainApp.pages,
  page: state.mainApp.page,
});
const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shope);
