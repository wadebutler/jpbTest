import { useRecoilState } from "recoil"
import { prizeListAtom } from "../atoms"

export const usePrizeList = () => {
    const [prizeList, setPrizeList] = useRecoilState(prizeListAtom)

    function addPrize(item){
        setPrizeList((prizeList) => [
            ...prizeList, 
            {
                key: prizeList.length,
                name: item
            }
        ])
    }

    return {prizeList, addPrize}
}