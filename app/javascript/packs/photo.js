import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {
  // var dataset = $('#photo-id').data()
  // var photoId = dataset.photoId

  // $('.heart-btn').on('click', function() {
  //   var id = $(this).attr('photo-id')
  //   console.log(id);
  //   axios.get(`/photos/18/like`)
  //     .then((response) => {
  //     const hasLiked = response.data.hasLiked
  //       if (hasLiked) {
  //         $('.active-heart').removeClass('hidden')
  //       } else {
  //         $('.inactive-heart').removeClass('hidden')
  //       }
  //     })
  // })
  
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
    axios.post(`/photos/${id}/like`)
      .then((response) => {
        console.log(response)
        if (response.data.status === 'ok') {
          $('.active-heart, #id').removeClass('hidden')
          $('.inactive-heart, #id').addClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    var id = $(e.currentTarget).attr('id')
    console.log(id);
    axios.delete(`/photos/${id}/like`)
      .then((response) => {
        console.log(response)
        if (response.data.status === 'ok') {
          $('.active-heart, #id').addClass('hidden')
          $('.inactive-heart, #id').removeClass('hidden')
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})
