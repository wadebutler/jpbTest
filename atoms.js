import {atom} from 'recoil';

export const prizeAtom = atom({
    key: 'prize',
    default: "",
})

export const screenAtom = atom({
    key: 'screen',
    default: '',
})

export const prizeListAtom = atom({
    key: 'prizeList',
    default: [{key: 1, name:"movie tickets"}, {key: 2, name: "free meal"}, {key: 3, name: "10% off"}],
})

export const purchaseListAtom = atom({
    key: 'purchaseList',
    default: [{key: 1, name:"burger"}, {key: 2, name: "fries"}, {key: 3, name: "veggie burger"}],
})