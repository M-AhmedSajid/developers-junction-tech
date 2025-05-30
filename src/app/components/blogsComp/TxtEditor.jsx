"use client"
import React, { useMemo, useRef } from 'react'
import JoditEditor from 'jodit-react';
import toast from 'react-hot-toast';

const TxtEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      buttons: ["bold", "italic", "underline", "strikethrough", "|", "fontsize", "paragraph", "ul", "ol", "|", "align", "brush", "superscript", "subscript", "|", "link", "image", "video", "|", "copyformat", "hr", "table", "source", "eraser", "fullsize"],
      uploader: {
        insertImageAsBase64URI: true,
        // url: '/api/images/upload',
        // handler: async (blob) => {
        //   try {
        //     const formData = new FormData();
        //     formData.append('files[0]', blob);
            
        //     const response = await fetch('/api/images/upload', {
        //       method: 'POST',
        //       body: formData,
        //     });
            
        //     const result = await response.json();
        //     if (result.success) {
        //       const inputField = document.querySelector('.jodit-ui-input__input');
        //       const tab = document.querySelectorAll('.jodit-tab');
        //       if (inputField) {
        //         inputField.value = `/${result.image.url}`;
        //         for (let i = 0; i < tab.length; i++) {
        //           tab.classList.toggle("jodit-tab_active");
        //         }
        //       }
        //     } else {
        //       toast.error("Server Error! Try Again");
        //     }
        //   } catch (err) {
        //     toast.error('Upload failed.');
        //   }
        // },
      },
      placeholder: 'Enter Blog Content',
      toolbarAdaptive: false,
    }),
    []
  );    

  return (
    <JoditEditor ref={editor} tabIndex={1} config={config} value={value} onBlur={onChange} />
  )
}

export default TxtEditor