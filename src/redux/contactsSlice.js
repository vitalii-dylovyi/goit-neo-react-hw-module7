import { nanoid } from 'nanoid';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { selectNameFilter } from './filtersSlice';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      });
  },
});

export const selectLoading = (state) => state.contacts.loading;
export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export const contactsReducer = contactsSlice.reducer;
