import axios, { CancelToken } from 'axios';

export const fetchSubjectsApi = {
  cancel: null,
  run: () => (
    axios.get('/api/subjects', {
      cancelToken: new CancelToken(c => fetchSubjectsApi.cancel = c)
    })
    .then(({ data }) => data)
  )
};
