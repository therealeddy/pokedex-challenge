import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Loading, Pagination } from '~/components';
import { What } from '~/images';
import { getPokemonsRequest } from '~/store/modules/pokemons/actions';
import documentTitle from '~/utils/documentTitle';
import titleize from '~/utils/titleize';

import { Container, Pokemon } from './styles';

export default function Home() {
  documentTitle('Home');

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { pokemons, count, loading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemonsRequest(page));
  }, [dispatch, page]);

  return (
    <Container>
      <div className="container">
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="row justify-content-center">
              {pokemons.map((item, index) => (
                <div className="col-lg-4" key={String(index)}>
                  <Pokemon to={`/pokemon/${item.id}`}>
                    <div>
                      <div className="id">#{item.id}</div>
                      <h2>{titleize(item.name)}</h2>
                    </div>
                    <img src={What} alt="pokemon" />
                  </Pokemon>
                </div>
              ))}
            </div>
            <Pagination
              postsPerPage={20}
              totalPosts={count}
              setPaged={(number) => setPage(number)}
              currentPage={page}
            />
          </>
        )}
      </div>
    </Container>
  );
}
