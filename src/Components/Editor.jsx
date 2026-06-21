import Editor from '@monaco-editor/react';
function CodeEditor() {
    return (
        <div className='grid grid-cols-2 gap-3 p-4' >
            <Editor
                height="400px"
                defaultLanguage="javascript"
                defaultValue="// Type your code here"
                theme="vs-dark"
            />
            <Editor
                height="400px"
                defaultLanguage="javascript"
                defaultValue="// Type your code here"
                theme="vs-dark"
            />

        </div>

    )
}
export default CodeEditor