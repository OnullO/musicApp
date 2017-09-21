
// import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}


const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  // disc: {},
  // topList: {},
  // searchHistory: loadSearch(),
  // playHistory: loadPlay(),
  // favoriteList: loadFavorite()
}

export default state