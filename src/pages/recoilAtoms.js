import { atom } from 'recoil';

export const loggedInUserAtom = atom({
  key: 'loggedInUserAtom',
  default: null,
});