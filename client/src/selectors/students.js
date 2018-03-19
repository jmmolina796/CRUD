import { createSelector } from 'reselect';
import _ from 'lodash';

export const getStudent = createSelector(
  ({ students }, id) => students.list[id],
  ({ semesters }) => semesters.list,
  ({ subjects }) => subjects.list,
  (student, semesters, subjects) => {
    if (!student || !semesters || !subjects) {
      return {
        id_semester: '0',
        id_subject: '0',
      };
    }
    const id_subject = _.findKey(subjects, {name: student.favorite_subject});
    const id_semester = _.findKey(semesters, {name: student.semester});
    return {
      ...student.without(['id', 'favorite_subject', 'semester']),
      id_subject,
      id_semester,
    };
  }
);

export const findStudent = createSelector(
  ({ students }, id) => students.list[id],
  student => student ? student.name : ''
);
