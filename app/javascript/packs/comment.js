import $ from 'jquery'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#photo-show').data()
  const photoId = dataset.photoId

  axios.get(`/photos/${photoId}/comments`)
    .then((response) => {
      const comments = response.data
      comments.forEach((comment) => {
        $('.comments-container').append(
          `<div class="comment_detail">
            <img src="${comment.user.avatar_comment_image}">
            <div class="comment_wrap">
              <div class="comment_wrap_name">
                <p>${comment.user.account}</p>
              </div>
              <div class="comment_wrap_content">
                <p>${comment.content}</p>
              </div>
            </div>
          </div>`
        )
      })
    })
})
