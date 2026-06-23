import { useRef, useState } from 'react';
import { Editor, DiffEditor } from '@monaco-editor/react';
import LanguageSelector from '../Functionalities/Languageselector';
import useStore from '../Store/Store';
import { editor } from 'monaco-editor';
function CodeEditor() {

    const value = useStore(state => state.value)
    const apiValue = useStore(state => state.apiValue)
    const language = useStore(state => state.language)
    const setEditorRef = useStore(state => state.setEditorRef)
    const setOnSelect = useStore(state => state.setOnSelect)
    const setCheckChanges = useStore(state => state.setCheckChanges)
    const buttonPressed = useStore(state => state.buttonPressed)
    const setButtonPressed = useStore(state => state.setButtonPressed)


    const handleBeforeMonaco = (monaco) => {
        // ... any existing beforeMount logic or leave empty
    }

    const handleDiffEditorMount = (editor) => {
        // You can add a setDiffEditorRef to Store.js and call it here if needed
    }







    return (
        <div className='grid grid-cols-2 gap-3 p-4' >
            <div>
                <LanguageSelector />

                <button className='font-bold text-white' onClick={() => setCheckChanges(value)}  >Execute</button>
                <button className='text-white' onClick={() => { console.log(language) }}>language</button>
                <Editor
                    height="400px"
                    language={language}
                    defaultValue="// Type your code here"
                    theme="vs-dark"
                    beforeMount={handleBeforeMonaco}
                    onMount={setEditorRef}
                />
            </div>
            <div>


                <DiffEditor

                    height="400px"
                    language={language}
                    theme="vs-dark"
                    original={value}
                    onMount={handleDiffEditorMount}
                    modified={apiValue}
                />

            </div>

        </div>

    )
}
export default CodeEditor