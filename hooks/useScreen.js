import { useRecoilState } from "recoil"
import { screenAtom } from "../atoms"

export const useScreen = () => {
    const [screen, setScreen] = useRecoilState(screenAtom)

    function updateScreen(item){
        setScreen(item)
    }

    return {screen, updateScreen}
}