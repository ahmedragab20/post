import axios from 'axios'

export default ({store}) => {
  axios("http://localhost:5000/posts")
  .then(res => {
    store.commit("add", res.data)
  })
  .catch(err => {
    console.error(err);
  })
}
