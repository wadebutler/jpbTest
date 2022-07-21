import {atom, DefaultValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAtom = (key) => {
    return ({setSelf, onSet}) => {
        setSelf(
            AsyncStorage.getItem(key).then((savedValue) =>
                savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
            ),
        )
    
        onSet((newValue) => {
            if (newValue instanceof DefaultValue) {
                AsyncStorage.removeItem(key)
            } else {
                AsyncStorage.setItem(key, JSON.stringify(newValue))
            }
        })
    }
}

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
    default: [{key: 1, name:"Movie tickets"}, {key: 2, name: "Free burger"}, {key: 3, name: "Free juice"}, {key: 4, name:"Movie tickets"}, {key: 5, name: "Free burger"}, {key: 6, name: "Free juice"}],
    effects_UNSTABLE: [persistAtom('persistPrizeList')]
})

export const purchaseListAtom = atom({
    key: 'purchaseList',
    default: [{key: 1, name:"burger"}, {key: 2, name: "fries"}, {key: 3, name: "veggie burger"}],
})