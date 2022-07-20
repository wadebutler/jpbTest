import { useRecoilState } from "recoil"
import { prizeAtom } from "../atoms"

export const usePrize = () => {
    const [prize, setPrize] = useRecoilState(prizeAtom)

    function addPrize(item){
        setPrize(item)
    }

    return {prize, addPrize}
}