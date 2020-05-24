import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import PropTypes from 'prop-types';

import { useColors } from '~/hooks/theme';

import { Container } from './styles';

export default function Pagination({
  currentPage,
  totalPosts,
  postsPerPage,
  setPaged,
}) {
  const pageNumbers = [];
  const colors = useColors();

  let cont = 0;
  let paged = 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (currentPage === 1) {
    paged = currentPage;
  } else if (currentPage === 2) {
    paged = 1;
  } else {
    paged = currentPage - 2;
  }

  for (let i = paged; i <= totalPages; i++) {
    if (cont < 5) {
      pageNumbers.push(i);
    }

    cont++;
  }

  return (
    <Container>
      {totalPosts > 0 && (
        <>
          <li className={`btn-paged left ${currentPage === 1 && 'disabled'}`}>
            <button
              type="button"
              onClick={() => setPaged(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft size={30} color={colors.water} />
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              className={
                number === currentPage ? 'active page-item' : 'page-item'
              }
              key={String(number)}
            >
              <button type="button" onClick={() => setPaged(number)}>
                {number}
              </button>
            </li>
          ))}

          <li
            className={`btn-paged right ${
              currentPage === totalPages && 'disabled'
            }`}
          >
            <button
              type="button"
              onClick={() => setPaged(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight size={30} color={colors.water} />
            </button>
          </li>
        </>
      )}
    </Container>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPosts: PropTypes.number,
  postsPerPage: PropTypes.number,
  setPaged: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPosts: 0,
  postsPerPage: 0,
  setPaged: () => {},
};
