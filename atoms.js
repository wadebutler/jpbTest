import {atom} from 'recoil';

export const prizeAtom = atom({
    key: 'prize',
    default: "",
})

export const prizeListAtom = atom({
    key: 'prizeList',
    default: [],
})