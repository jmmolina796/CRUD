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

export const insertSubjectApi = {
  cancel: null,
  run: subject => (
    axios.post('/api/subjects', {
      subject,
    }, {
      cancelToken: new CancelToken(c => insertSubjectApi.cancel = c),
    })
      .then(({ data }) => data)
  )
};

export const updateSubjectApi = {
  cancel: null,
  run: (subject, id) => (
    axios.put('/api/subjects', {
      subject, id,
    }, {
      cancelToken: new CancelToken(c => updateSubjectApi.cancel = c),
    })
      .then(({ data }) => data)
  )
};
