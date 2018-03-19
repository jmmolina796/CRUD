const studentsFormValidation = (el) => {
  const errors = {};

  if (!el.name) {
    errors.name = 'Name is required';
  } else if (el.name.length <= 2) {
    errors.name = 'Name must be 3 characters or more';
  }

  if (!el.last_name) {
    errors.last_name = 'Last name is required';
  } else if (el.last_name.length <= 2) {
    errors.last_name = 'Last name must be 3 characters or more';
  }

  if (!el.phone) {
    errors.phone = 'Telephone is required';
  } else if(el.phone.length !== 12) {
    errors.phone = 'Incorrect format';
  }

  if (el.id_subject === '0') {
    errors.id_subject = 'Subject is required';
  }

  if (el.id_semester === '0') {
    errors.id_semester = 'Semester is required';
  }

  return errors;
};

export default studentsFormValidation;
