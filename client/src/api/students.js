import axios, { CancelToken } from 'axios';

export const fetchStudentsApi = {
  cancel: null,
  run: () => (
    axios.get('/api/students', {
      cancelToken: new CancelToken(c => fetchStudentsApi.cancel = c)
    })
    .then(({ data }) => data)
  )
};
