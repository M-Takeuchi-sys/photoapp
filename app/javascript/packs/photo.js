import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {

  $('.inactive-heart').on('click', (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('id') //クリックしたdivのid取得
    axios.post(`/api/photos/${id}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`.active-heart.${id}`).removeClass('hidden')
          $(`.inactive-heart.${id}`).addClass('hidden')
          const likeCount = $(`.like_count.${id}`).text()
          const numLikeCount = parseInt(likeCount)
          $(`.like_count.${id}`).text(numLikeCount + 1)
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })

  $('.active-heart').on('click', (e) => {
    e.preventDefault();
    const id = $(e.currentTarget).attr('id') //クリックしたdivのid取得
    axios.delete(`/api/photos/${id}/like`)
      .then((response) => {
        if (response.data.status === 'ok') {
          $(`.active-heart.${id}`).addClass('hidden')
          $(`.inactive-heart.${id}`).removeClass('hidden')
          const likeCount = $(`.like_count.${id}`).text();
          const numLikeCount = parseInt(likeCount)
          $(`.like_count.${id}`).text(numLikeCount - 1)
        }
      })
      .catch((e) => {
        window.alert('Error')
        console.log(e)
      })
  })
})
