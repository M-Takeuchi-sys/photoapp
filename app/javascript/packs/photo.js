import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#photo-id').data()
  const photoId = dataset.photoId

 
  // axios.get(`/photos/${photoId}/like`)
  //   .then((response) => {
  //     const hasLiked = response.data.hasLiked
  //     if (hasLiked) {
  //       $('.active-heart').removeClass('hidden')
  //     } else {
  //       $('.inactive-heart').removeClass('hidden')
  //     }
  //   })

  $('.inactive-heart').on('click', (e) => {
    e.preventDefault();
    var id = $(e.currentTarget).attr('id')
    console.log(id);
    // axios.post(`/photos/${photoId}/like`)
    //   .then((response) => {
    //     if (response.data.status === 'ok') {
    //       $('.active-heart').removeClass('hidden')
    //       $('.inactive-heart').addClass('hidden')
    //     }
    //   })
    //   .catch((e) => {
    //     window.alert('Error')
    //     console.log(e)
    //   })
  })

  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    var id = $(e.currentTarget).attr('id')
    console.log(id);
    // axios.delete(`/photos/${photoId}/like`)
    //   .then((response) => {
    //     if (response.data.status === 'ok') {
    //       $('.active-heart').addClass('hidden')
    //       $('.inactive-heart').removeClass('hidden')
    //     }
    //   })
    //   .catch((e) => {
    //     window.alert('Error')
    //     console.log(e)
    //   })
  })
})
