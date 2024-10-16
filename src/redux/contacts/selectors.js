import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./slice";
import { selectNameFilter } from "../filters/slice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().trim().includes(filters.toLowerCase().trim())
    );
  }
);
