import React, { useState } from 'react';

function useForm(defaults) {
  const [values, setValues] = useState('');

  function updateValue(e) {
    let { value } = e.target;

    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}

export default useForm;
