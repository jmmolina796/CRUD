import { createSelector } from 'reselect';
import _ from 'lodash';

export const getSubject = createSelector(
  ({ subjects }, id) => subjects.list[id],
  ({ semesters }) => semesters.list,
  ({ categories }) => categories.list,
  (subject, semesters, categories) => {
    if (!subject || !semesters || !categories) {
      return {
        id_semester: '0',
        id_category: '0',
      };
    }
    const id_category = _.findKey(categories, {name: subject.category});
    const id_semester = _.findKey(semesters, {name: subject.semester});
    return {
      ...subject.without(['id', 'category', 'semester']),
      id_category,
      id_semester,
    };
  }
);

export const findSubject = createSelector(
  ({ subjects }, id) => subjects.list[id],
  subject => subject ? subject.name : ''
);
