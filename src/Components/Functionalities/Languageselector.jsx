import { useState } from "react"
import LANGUAGE_VERSIONS from "./Constants"
import useStore from "../Store/Store"


function LanguageSelector() {
    const buttonPressed = useStore(state => state.buttonPressed)
    const setButtonPressed = useStore(state => state.setButtonPressed)
    const setOnSelect = useStore(state => state.setOnSelect)
    const language = useStore(state => state.language)



    return (
        <div>
            <button onClick={() => setButtonPressed(buttonPressed)} >
                {language}
            </button>
            {buttonPressed && (
                <ul>
                    {Object.keys(LANGUAGE_VERSIONS).map((L) => (
                        <li key={L} onClick={() => setOnSelect(L, buttonPressed)}>
                            {L}
                        </li>
                    ))}
                </ul>
            )}



        </div>
    )
}
export default LanguageSelector