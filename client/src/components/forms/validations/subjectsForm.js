const subjectsFormValidation = (el) => {
  const errors = {};

  if (!el.name) {
    errors.name = 'Name is required';
  } else if (el.name.length <= 2) {
    errors.name = 'Name must be 3 characters or more';
  }

  if (el.id_category === '0') {
    errors.id_category = 'You have to select a category';
  }

  if (el.id_semester === '0') {
    errors.id_semester = 'You have to select a semester';
  }

  if(!el.credits) {
    errors.credits = 'Credits are required';
  } else if (isNaN(el.credits)) {
    errors.credits = 'You have to insert a number';
  }

  return errors;
};

export default subjectsFormValidation;
