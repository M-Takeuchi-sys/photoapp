import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

const dataset = $('#photo-id').data()
const photoId = dataset.photoId

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $(`.active-heart${photoId}`).children().removeClass('hidden')
  } else {
    $(`.inactive-heart${photoId}`).children().removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {

  axios.get(`/photos/${photoId}/like`)
    .then((response) => {
      const hasLiked = response.data.hasLiked
      handleHeartDisplay(hasLiked)
    })

  $(`.inactive-heart${photoId}`).children().on('click', () => {
    axios.post(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`.active-heart${photoId}`).children().removeClass('hidden')
          $(`.inactive-heart${photoId}`).children().addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $(`.active-heart${photoId}`).children().on('click', () => {
    axios.delete(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`.active-heart${photoId}`).children().addClass('hidden')
          $(`.inactive-heart${photoId}`).children().removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})
