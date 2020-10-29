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
            <a href="/accounts/${comment.user.id}">
              <img src="${comment.user.avatar_comment_image}">
            </a>
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

  $('.show-comment-form').on('click', () => {
    $('.show-comment-form').addClass('hidden')
    $('.comment-text-area').removeClass('hidden')
  })

  $('.add-comment-button').on('click', () => {
    const content = $('#comment_content').val()
    if (!content) {
      window.alert('コメントを入力してください')
    } else {
      axios.post(`/photos/${photoId}/comments`, {
        comment: {content: content}
      })
        .then((res) => {
          const comment = res.data
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
          $('#comment_content').val('')
        })
    }
  })
})
