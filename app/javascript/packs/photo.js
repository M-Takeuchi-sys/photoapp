import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#photo-id').data()
  const photoId = dataset.photoId
  const photoIdStr = String(photoId)
 
  axios.get(`/photos/${photoId}/like`)
    .then((response) => {
      const hasLiked = response.data.hasLiked
      if (hasLiked) {
        $('.active-heart' + photoIdStr).removeClass('hidden')
      } else {
        $('.inactive-heart' + photoIdStr).removeClass('hidden')
      }
    })
    
  $('.heartBtn').on('click', () => {
    axios.post(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.active-heart' + photoIdStr).removeClass('hidden')
          $('.inactive-heart' + photoIdStr).addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $('.heartBtn').on('click', () => {
    axios.delete(`/photos/${photoId}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $('.active-heart' + photoIdStr).addClass('hidden')
          $('.inactive-heart' + photoIdStr).removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})
