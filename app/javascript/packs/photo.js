import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

const handleHeartDisplay = (hasLiked) => {
  if (hasLiked) {
    $('.photo-active-heart').children().removeClass('hidden')
  } else {
    $('.photo-inactive-heart').children().removeClass('hidden')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#photo-id').data()
  const photoId = dataset.photoId
  axios.get(`/photos/${photoId}/like`)
    .then((response) => {
      const hasLiked = response.data.hasLiked
      handleHeartDisplay(hasLiked)
    })

  $('.photo-inactive-heart').children().on('click', () => {
    axios.post(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.photo-active-heart').children().removeClass('hidden')
          $('.photo-inactive-heart').children().addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $('.photo-active-heart').children().on('click', () => {
    axios.delete(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.photo-active-heart').children().addClass('hidden')
          $('.photo-inactive-heart').children().removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})
