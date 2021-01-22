import Head from "next/head";
import dynamic from "next/dynamic";
import PdfViewerStyles from "../styles/pdfviewer.module.css";

const PdfViewer = dynamic(import("../components/webviewer"), { ssr: false });

export default function PdfViewerPage() {
  return (
    <>
      <div className={PdfViewerStyles.container}>
        <Head>
          <title>Example Leavers Book</title>
        </Head>
        <PdfViewer></PdfViewer>
      </div>
    </>
  );
}
