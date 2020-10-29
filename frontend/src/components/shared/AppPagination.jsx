import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AppPagination = ({ pages, page, isAdmin = false, text = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((currentPage) => (
          <LinkContainer
            key={currentPage + 1}
            to={
              !isAdmin
                ? text
                  ? `/shope/${text}/page/${currentPage + 1}`
                  : `/shope/page/${currentPage + 1}`
                : `/admin/productlist/${currentPage + 1}`
            }
          >
            <Pagination.Item active={currentPage + 1 === page}>
              {currentPage + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default AppPagination;
