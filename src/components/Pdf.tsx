'use client'

import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export const Pdf = () => {
  const contentRef = useRef(null);

  const generatePDF = () => {
    const content = contentRef.current;

    if (content) {
      html2pdf(content);
    }
  };

  return (
    <div>conteudo que vai pro pdf</div>
  )

} 