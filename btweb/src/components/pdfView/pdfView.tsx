import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PasswordResponses } from 'pdfjs-dist';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { getIsMobile } from '../common';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

export const PdfInlineView = (props: any) => {
  const { url, onProgress, togglePreviewPdf, setUrl } = props;

  const isMobile = getIsMobile();

  const [rotate] = useState<number | undefined>(undefined);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      setPageWidth(containerRef.current.offsetWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const previewMode = props?.file?.previewMode || false;

  if (previewMode === 'iframe') {
    return (
      <iframe
        src={url}
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      />
    );
  }

  const handleOnPassword = (
    callback: (password: string) => void,
    reason: number,
  ) => {
    function callbackProxy(password: string | null) {
      if (password === null) {
        togglePreviewPdf?.('');
        setUrl?.('');
      }

      callback(password || '');
    }

    switch (reason) {
      case PasswordResponses.NEED_PASSWORD:
        callbackProxy(
          prompt('Enter the password to open this PDF file.'),
        );
        break;

      case PasswordResponses.INCORRECT_PASSWORD:
        callbackProxy(
          prompt('Invalid password. Please try again.'),
        );
        break;

      default:
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Document
        file={url}
        rotate={rotate}
        renderMode="canvas"
        onLoadSuccess={onDocumentLoadSuccess}
        onPassword={handleOnPassword}
        onLoadProgress={({ loaded, total }) => {
          if (!total) return;

          const percentage = Math.min(
            100,
            Math.floor((loaded / total) * 100),
          );

          onProgress?.(percentage);
        }}
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                margin: 0,
                padding: 0,
                lineHeight: 0,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Page
                pageNumber={index + 1}
                width={
                  Math.max(
                    320,
                    pageWidth - (isMobile ? 0 : 20),
                  )
                }
                rotate={rotate}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                className="pdf-page"
              />
            </div>
          ))}
      </Document>
    </div>
  );
};