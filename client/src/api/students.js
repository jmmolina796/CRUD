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

export const insertStudentApi = {
  cancel: null,
  run: student => (
    axios.post('/api/students', {
      student,
    }, {
      cancelToken: new CancelToken(c => insertStudentApi.cancel = c),
    })
      .then(({ data }) => data)
  )
};
