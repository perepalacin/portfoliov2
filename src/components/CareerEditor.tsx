import { DefaultCareerJson } from "@/constants/career.ts";
import * as monaco from "monaco-editor";

import { useEffect, useRef } from "preact/hooks";

self.MonacoEnvironment = {
    // @ts-ignore
    getWorkerUrl: function (_moduleId, label) {
        if (label === "json") {
            return new URL("monaco-editor/esm/vs/language/json/json.worker", import.meta.url);
        }
        if (label === "css" || label === "scss" || label === "less") {
            return new URL("monaco-editor/esm/vs/language/css/css.worker", import.meta.url);
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
            return new URL("monaco-editor/esm/vs/language/html/html.worker", import.meta.url);
        }
        if (label === "typescript" || label === "javascript") {
            return new URL("monaco-editor/esm/vs/language/typescript/ts.worker", import.meta.url);
        }
        // Fallback for the editor core worker
        return new URL("monaco-editor/esm/vs/editor/editor.worker", import.meta.url);
    },
};

export function CareerEditor() {
    const divEl = useRef<HTMLDivElement>(null);
    const editorRef = useRef<unknown>(null);
    let editor: monaco.editor.IStandaloneCodeEditor;
    useEffect(() => {
        if (divEl.current && !editorRef.current) {
            monaco.editor.defineTheme("transparent-dark", {
                base: "vs-dark",
                inherit: true,
                rules: [],
                colors: {
                    "editor.background": "#00000000",
                    "minimap.background": "#00000000",
                    "editor.selectionHighlightBackground": "#00000000",
                    "editor.selectionBackground": "#00000000",
                    "editorOverviewRuler.selectionHighlightForeground": "#00000000",
                    "editorOverviewRuler.errorForeground": "#00000000",
                    "editorOverviewRuler.warningForeground": "#00000000",
                },
            });

            const editorOptions = {
                theme: "transparent-dark",
                renderLineHighlight: "none",
                fontFamily: "Fira Code, Consolas, 'Courier New', monospace",
                fontSize: 14,
                lineNumbers: "hidden",
                scrollbar: {
                    horizontal: "hidden",
                },
                scrollBeyondLastLine: false,
                minimap: {
                    enabled: false,
                },
                overviewRulerBorder: false,
            };

            const jsonValue = JSON.stringify(DefaultCareerJson, null, 2);

            const finalOptions = {
                value: jsonValue,
                language: "json",
                ...editorOptions,
            } as monaco.editor.IStandaloneEditorConstructionOptions;

            editor = monaco.editor.create(divEl.current, finalOptions);
            editorRef.current = editor;
        }

        return () => {
            if (editorRef.current) {
                editorRef.current = null;
            }
        };
    }, []);

    return (
        <aside class={"editor-container"}>
            <div className="editor" ref={divEl} style={{ height: "80vh" }}></div>;
        </aside>
    );
}
