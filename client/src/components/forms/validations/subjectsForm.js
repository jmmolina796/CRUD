const subjectsFormValidation = (el) => {
  const errors = {};

  if (!el.name) {
    errors.name = 'Name is required';
  } else if (el.name.length <= 2) {
    errors.name = 'Name must be 3 characters or more';
  }

  if (el.id_category === '0') {
    errors.id_category = 'Category is required';
  }

  if (el.id_semester === '0') {
    errors.id_semester = 'Semester is required';
  }

  if(!el.credits) {
    errors.credits = 'Credits are required';
  } else if (isNaN(el.credits)) {
    errors.credits = 'Incorrect format';
  }

  return errors;
};

export default subjectsFormValidation;
