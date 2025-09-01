import { useDispatch } from 'react-redux';
import { PhoneIcon, UserIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { deleteContact } from '@/redux/contactsOps';

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };

  return (
    <div className='flex p-4 min-w-80 border rounded-md items-center justify-between'>
      <div className='gap-2 flex flex-col text-left'>
        <div className='flex gap-2 items-center'>
          <UserIcon size={20} />
          <span>{data.name}</span>
        </div>
        <div className='flex gap-2 items-center'>
          <PhoneIcon size={20} />
          <span>{data.number}</span>
        </div>
      </div>

      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default Contact;
