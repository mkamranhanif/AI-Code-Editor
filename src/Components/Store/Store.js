import { languages } from "monaco-editor";
import { create } from "zustand";

const useStore = create((set, get) => ({
    buttonPressed: false,
    editorRef: null,
    diffEditorRef: null,
    value: null,
    apiValue: null,
    language: 'javascript',

    setEditorRef: (editor) => {
        set({ editorRef: editor });
    },

    setOnSelect: (lang, button) => {
        set({ language: lang, buttonPressed: !button });
        const Language = get().language
        console.log(Language)

    },

    setCheckChanges: (value) => {
        const editor = get().editorRef;
        if (editor) {
            set({ value: editor.getValue(), apiValue: "hahahaha" });
        }
    },
    setButtonPressed: (button) => {
        const Button = get().buttonPressed
        set({ buttonPressed: !button })
        console.log(Button)

    },


}));

export default useStore;
const pressed = () => {
    setButtonPressed(!buttonPressed)
}
