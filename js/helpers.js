import { FLICKR_API_KEY, RESULTS_SIZE } from './constants'

function debounce (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
};

function buildSearchUrl (searchQuery) {
  return (`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&per_page=${RESULTS_SIZE}&text=${searchQuery}`)
}

function buildPhotoUrl (photo) {
  if (!photo) {
    return null
  } else {
    return (`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)
  }
}

export {
  debounce,
  buildSearchUrl,
  buildPhotoUrl
}
