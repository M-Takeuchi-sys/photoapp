import $ from 'jquery'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  const dataset = $('#account-show').data()
  const accountId = dataset.accountId
  const userId = dataset.userId
  axios.get(`/accounts/${accountId}/follows/${userId}`)
    .then((response) => {
      console.log(response)
    })
})
