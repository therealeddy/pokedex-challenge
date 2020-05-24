import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Loading } from '~/components';
import { useColors } from '~/hooks/theme';
import { getStatusRequest } from '~/store/modules/status/actions';
import documentTitle from '~/utils/documentTitle';
import { isEmpty } from '~/utils/object';
import titleize from '~/utils/titleize';

import { Container, Progress } from './styles';

export default function Pokemon({ match }) {
  const { params } = match;

  const colors = useColors();

  documentTitle('Pokemon');

  const dispatch = useDispatch();

  const { pokemon, loading } = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(getStatusRequest(params.id));
  }, [dispatch, params]);

  return (
    <>
      {loading ? (
        <div className="mt-5">
          <Loading />
        </div>
      ) : (
        !isEmpty(pokemon) && (
          <Container
            type={colors[pokemon.types[pokemon.types.length - 1].type.name]}
          >
            <div className="container">
              <div className="top">
                <img src={pokemon.sprites.front_default} alt="pokemon" />
                <div className="info">
                  <div className="id">#{pokemon.id}</div>
                  <h1>{titleize(pokemon.name)}</h1>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="container">
                <h2>Base Stats</h2>
                {pokemon.stats.map((item, index) => (
                  <div key={String(index)} className="item-single">
                    <div className="title">{titleize(item.stat.name)}</div>
                    <div className="number">{item.base_stat}</div>
                    <Progress
                      className="progress-status"
                      progress={item.base_stat}
                    />
                  </div>
                ))}
                <div className="item-single">
                  <div className="title">Abilities</div>
                  <div>
                    {pokemon.abilities.map((item, index) => (
                      <div key={String(index)} className="ability">
                        {index + 1}. {titleize(item.ability.name)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        )
      )}
    </>
  );
}

Pokemon.propTypes = {
  match: PropTypes.object,
};

Pokemon.defaultProps = {
  match: {},
};
