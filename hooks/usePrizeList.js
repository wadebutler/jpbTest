import { useRecoilState } from "recoil"
import { prizeListAtom } from "../atoms"

export const usePrizeList = () => {
    const [prizeList, setPrizeList] = useRecoilState(prizeListAtom)

    function addPrize(item){
        setPrizeList((prizeList) => [
            ...prizeList, 
            {
                key: prizeList.length + 1,
                name: item
            }
        ])
    }

    function removePrize(key) {
        setPrizeList((prizeList) => prizeList.filter((item) => item.key !== key.key))
    }

    return {prizeList, addPrize, removePrize}
}