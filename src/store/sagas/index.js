import { all, takeLatest } from 'redux-saga/effects';

import { PlayerTypes } from '~/store/ducks/player';
import { PodcastsTypes } from '~/store/ducks/podcasts';

import {
  init, setPodcast, play, pause, next, prev, reset,
} from './player';

import { load } from './podcasts';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PlayerTypes.SET_PODCAST, setPodcast),
    takeLatest(PlayerTypes.RESET, reset),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREV, prev),

    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
  ]);
}
