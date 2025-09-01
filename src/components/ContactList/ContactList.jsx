import { useSelector } from 'react-redux';
import { memo, useDeferredValue } from 'react';

import Contact from '../Contact';
import {
  selectError,
  selectLoading,
  selectContacts,
  selectFilteredContacts,
} from '@/redux/contactsSlice';

const ContactList = memo(() => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className='gap-4 flex flex-col flex-wrap'>
      {visibleContacts.map((i) => (
        <Contact data={i} key={i.id} />
      ))}
    </div>
  );
});

export default ContactList;
