import { useDispatch } from 'react-redux';
import { useDeferredValue, useEffect, useMemo, useState } from 'react';

import './App.css';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './providers/theme-provider';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div className='gap-8 flex flex-col items-start'>
        <div className='flex gap-6 items-center'>
          <h1>Phonebook</h1>
          <ModeToggle />
        </div>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </ThemeProvider>
  );
}

export default App;
