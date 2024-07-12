'use client'

import React, { useState, useEffect, useRef } from 'react';
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea, Divider} from "@nextui-org/react";
import dynamic from 'next/dynamic';
import "/app/globals.css";

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function Home() {
    const [html, setHtml] = useState('');
    const [editorVisible, setEditorVisible] = useState(true);
    const [isFullScreenPreview, setIsFullScreenPreview] = useState(false);
    const editorRef = useRef(null);

    useEffect(() => {
        const iframe = document.getElementById('preview');
        if (iframe) {
            // @ts-ignore
            iframe.srcdoc = html;
        }
    }, [html]);

    const toggleEditor = () => {
        setEditorVisible(!editorVisible);
    };

// @ts-ignore
    const handleEditorChange = (value) => {
        setHtml(value);
    };

// @ts-ignore
    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        if (monaco && monaco.version) {
            setMonacoVersion(monaco.version);
        }
    };

    const handleSave = () => {
        // Implement save functionality here
        console.log('Saving:', html);
        // For example, you could send this to an API endpoint:
        // fetch('/api/save-html', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ html })
        // })
        // .then(response => response.json())
        // .then(data => console.log('Save successful:', data))
        // .catch(error => console.error('Save failed:', error));

        // Or, to save as a file in the browser:
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const toggleFullScreenPreview = () => {
        setIsFullScreenPreview(!isFullScreenPreview);
    };

    const [monacoVersion, setMonacoVersion] = useState<string | null>(null);
    const menuTransition = {type: "spring",  bounce: 0, duration: .5};
    return (
        <div className={` flex flex-col items-start gap-6 py-24`}>
            <h1 className="text-5xl font-bold">HTML Editor</h1>
            <div className="flex flex-col justify-center items-start border-1 rounded-[1rem] w-full p-4 gap-4">
                <section className={"flex flex-row justify-between w-full"}>
                    <section className={"flex flex-row gap-2"}>
                        <Button onClick={toggleFullScreenPreview} color="primary"
                                variant="solid">Preview</Button>
                        <Button onClick={toggleEditor} color={`${editorVisible ? 'primary' : 'default'}`}
                                variant={"ghost"}>Toggle Editor</Button>
                    </section>
                    <Button onClick={handleSave} isIconOnly variant={"ghost"}>
                        <p className={`ph ph-download text-[1.25rem]`}></p>
                    </Button>
                </section>
                <Divider></Divider>
                <p className={`text-2xl ${editorVisible ? 'flex' : 'hidden'}`}><strong>Editor</strong></p>
                {monacoVersion && (
                    <p className="">Monaco Editor version: {monacoVersion}</p>
                )}
                <div className="flex flex-col w-full justify-center items-start gap-4 rounded-md">
                    {editorVisible && (
                        <MonacoEditor
                            height="75vh"
                            defaultLanguage="html"
                            value={html}
                            className={"w-full border-1 rounded-md"}
                            onChange={handleEditorChange}
                            onMount={handleEditorDidMount}
                            options={{
                                minimap: {enabled: false},
                                fontSize: 14,
                                wordWrap: 'off',
                                autoClosingBrackets: true,
                                formatOnPaste: true,
                                formatOnType: true,
                                dragAndDrop: true,
                            }}
                        />
                    )}
                    <iframe
                        className={`border-1 rounded-md flex backdrop-blur ${isFullScreenPreview ? 'flex' : 'hidden'}`}
                        id="preview"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            width: isFullScreenPreview ? '100vw' : '100%',
                            height: isFullScreenPreview ? '100vh' : '100lvh',
                            position: "fixed",
                            top: isFullScreenPreview ? 0 : 'auto',
                            left: isFullScreenPreview ? 0 : 'auto',
                            zIndex: isFullScreenPreview ? 10001 : 'auto',
                        }}
                    ></iframe>
                    <Button isIconOnly color={"danger"} className={`fixed z-[10002] top-4 self-end ${isFullScreenPreview ? '' : 'hidden'}`}
                            onClick={toggleFullScreenPreview}>
                        <p className={"ph ph-x text-[1.25rem]"}></p>
                    </Button>
                </div>
            </div>
        </div>
    );
}