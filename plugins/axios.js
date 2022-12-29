
import Swal from 'sweetalert2'

export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
      config.head
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        Swal.fire({
            icon: 'error',
            text: error.response.data.toString(),
        });
      }
      if (code === 500) {
        Swal.fire({
            icon: 'error',
            text: error.response.data.message.toString(),
        });
      }
    })
  }