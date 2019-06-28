import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  reset: null,
  play: null,
  pause: null,
  next: null,
  prev: null,
  setCurrent: ['id'],
  setPodcast: ['podcast', 'songId'],
  setPodcastSuccess: ['podcast'],
});

export const PlayerTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  podcast: null,
  playing: false,
  current: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET]: state => state.merge({ podcast: null, current: null, playing: false }),
  [Types.PLAY]: state => state.merge({ playing: true }),
  [Types.PAUSE]: state => state.merge({ playing: false }),
  [Types.NEXT]: state => state.merge({ playing: true }),
  [Types.PREV]: state => state.merge({ playing: true }),
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id, playing: true }),
  [Types.SET_CURRENT]: (state, { id }) => state.merge({ current: id }),
});
