import $ from 'jquery'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#photo-id').data()
  const photoId = dataset.photoId
  axios.get(`/photos/${photoId}/like`)
    .then((response) => {
      console.log(response)
    });
});
