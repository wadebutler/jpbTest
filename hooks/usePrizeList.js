import { useRecoilState } from "recoil"
import { prizeListAtom } from "../atoms"

export const usePrizeList = () => {
    const [prizeList, setPrizeList] = useRecoilState(prizeListAtom)

    function addPrize(item){
        setPrizeList((prizeList) => [
            ...prizeList, 
            {
                key: Math.floor(Math.random() * 100),
                name: item
            }
        ])
    }

    return {prizeList, addPrize}
}