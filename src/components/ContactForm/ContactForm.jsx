import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { addContact } from '@/redux/contactsOps';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={ContactSchema}
    >
      {({ isValid }) => (
        <Form className='flex flex-col items-start gap-4 p-4 border rounded-md'>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              as={Input}
              type='text'
              name='name'
              id={nameFieldId}
              className='min-w-72'
            />
            <ErrorMessage name='name' component='span' className='text-destructive' />
          </div>
          <div>
            <label htmlFor={nameFieldId}>Number</label>
            <Field
              as={Input}
              type='text'
              name='number'
              id={numberFieldId}
              className='min-w-72'
            />
            <ErrorMessage name='number' component='span' className='text-destructive' />
          </div>

          <Button type='submit' disabled={!isValid} className='place-self-center'>
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
