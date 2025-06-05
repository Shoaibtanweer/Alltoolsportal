// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // == TOOL DATA ( All tools data here our 147  more than  TOOLS) ==
    // =================================================================================
   
    const toolsData = {
      pdf: [
        // --- Sejda PDF Tools All here ---
        { id: "pdf-jpgtopdf-sejda", name: "JPG to PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "JPG to PDF icon", description: "Convert JPG images to PDF documents using Sejda.", score: 4.5, reviews: 120, url: "https://www.sejda.com/jpg-to-pdf", tutorial: "https://www.sejda.com/jpg-to-pdf", faq: "https://www.sejda.com/jpg-to-pdf" },
        { id: "pdf-mergepdf-sejda", name: "Merge PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Merge PDF icon", description: "Combine multiple PDF files into one document with Sejda.", score: 4.3, reviews: 90, url: "https://www.sejda.com/merge-pdf", tutorial: "https://www.sejda.com/merge-pdf", faq: "https://www.sejda.com/merge-pdf" },
        { id: "pdf-alternatemix-sejda", name: "Alternate & Mix PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Alternate & Mix PDF icon", description: "Alternate and mix pages from PDF files with Sejda.", score: 4.2, reviews: 70, url: "https://www.sejda.com/alternate-mix-pdf", tutorial: "https://www.sejda.com/alternate-mix-pdf", faq: "https://www.sejda.com/alternate-mix-pdf" },

        { id: "pdf-organizepdf-sejda", name: "Organize PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Organize PDF icon", description: "Organize pdf document easily with Sejda.", score: 4.6, reviews: 160, url: "https://www.sejda.com/organize-pdf", tutorial: "https://www.sejda.com/organize-pdf", faq: "https://www.sejda.com/organize-pdf" },

        {id:"pdf-createfillablepdf-sejda", name:"Create Fillable PDF (Sejda)",icon:"https://placehold.co/80x80/0284C7/ffffff?text=S",iconAlt:"Create Fillable PDF icon",description:"Easily fill, sign, and edit PDF forms online",score:4.7,reviews: 170,url:"https://www.sejda.com/pdf-forms",tutorial:"https://www.sejda.com/pdf-forms",faq:"https://www.sejda.com/pdf-forms" },
 
    {
    id: "pdf-protectpdf-sejda", name: "Protect PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Protect PDF tool icon", description: "Add password protection to your PDF files with Sejda.", score: 4.5, reviews: 110, url: "https://www.sejda.com/encrypt-pdf", tutorial: "https://www.sejda.com/encrypt-pdf",faq: "https://www.sejda.com/encrypt-pdf" },
    {
    id: "pdf-unlockpdf-sejda",name: "Unlock PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Unlock PDF tool icon", description: "Remove password from PDF documents quickly and easily.", score: 4.4, reviews: 95, url: "https://www.sejda.com/unlock-pdf", tutorial: "https://www.sejda.com/unlock-pdf", faq: "https://www.sejda.com/unlock-pdf" },
    
     { id: "pdf-watermarkpdf-sejda", name: "Watermark PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Watermark PDF tool icon", description: "Add text or image watermark to your PDF files easily.", score: 4.3, reviews: 100,  url: "https://www.sejda.com/watermark-pdf", tutorial: "https://www.sejda.com/watermark-pdf", faq: "https://www.sejda.com/watermark-pdf" },
     { id: "pdf-flattenpdf-sejda", name: "Flatten PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Flatten PDF tool icon", description: "Make form fields and annotations uneditable by flattening your PDF.", score: 4.2,reviews: 85,  url: "https://www.sejda.com/flatten-pdf",  tutorial: "https://www.sejda.com/flatten-pdf", faq: "https://www.sejda.com/flatten-pdf" },
     { id: "pdf-pdftoexcel-sejda", name: "PDF to Excel (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "PDF to Excel tool icon", description: "Convert your PDF tables into editable Excel spreadsheets.", score: 4.5, reviews: 120, url: "https://www.sejda.com/pdf-to-excel", tutorial: "https://www.sejda.com/pdf-to-excel", faq: "https://www.sejda.com/pdf-to-excel" },
     { id: "pdf-pdftojpg-sejda", name: "PDF to JPG (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "PDF to JPG tool icon", description: "Convert PDF pages into high-quality JPG images.",  score: 4.4,  reviews: 105,   url: "https://www.sejda.com/pdf-to-jpg", tutorial: "https://www.sejda.com/pdf-to-jpg",  faq: "https://www.sejda.com/pdf-to-jpg" },
    { id: "pdf-pdftoppt-sejda", name: "PDF to PPT (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "PDF to PPT tool icon",  description: "Convert PDF slides into editable PowerPoint presentations.",  score: 4.3, reviews: 98,  url: "https://www.sejda.com/pdf-to-ppt",  tutorial: "https://www.sejda.com/pdf-to-ppt",  faq: "https://www.sejda.com/pdf-to-ppt" },
    { id: "pdf-pdftotext-sejda", name: "PDF to Text (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "PDF to Text tool icon",  description: "Extract plain text from PDF files quickly and easily.",   score: 4.3, reviews: 91,  url: "https://www.sejda.com/ extract-text-from-pdf",  tutorial: "https://www.sejda.com/extract-text-from-pdf",  faq: "https://www.sejda.com/extract-text-from-pdf" },
    { id: "pdf-pdftoword-sejda", name: "PDF to Word (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "PDF to Word tool icon", description: "Convert your PDF documents into editable Word files.",  score: 4.6, reviews: 135,  url: "https://www.sejda.com/pdf-to-word",  tutorial: "https://www.sejda.com/pdf-to-word",  faq: "https://www.sejda.com/pdf-to-word" },
    { id: "pdf-htmltopdf-sejda", name: "HTML to PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "HTML to PDF tool icon",  description: "Convert HTML pages into PDF documents with one click.",  score: 4.4,  reviews: 112,  url: "https://www.sejda.com/html-to-pdf", tutorial: "https://www.sejda.com/html-to-pdf", faq: "https://www.sejda.com/html-to-pdf" },
    { id: "pdf-wordtopdf-sejda", name: "Word to PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "Word to PDF tool icon",  description: "Convert DOC or DOCX Word files into PDFs instantly.",  score: 4.5,  reviews: 122,  url: "https://www.sejda.com/word-to-pdf",  tutorial: "https://www.sejda.com/word-to-pdf",  faq: "https://www.sejda.com/word-to-pdf" },
    { id: "pdf-jpgtopdf-sejda", name: "JPG to PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "JPG to PDF icon",   description: "Convert JPG images to PDF documents using Sejda.",  score: 4.5, reviews: 120, url: "https://www.sejda.com/jpg-to-pdf",   tutorial: "https://www.sejda.com/jpg-to-pdf",   faq: "https://www.sejda.com/jpg-to-pdf" },
     { id: "pdf-renamepdf-sejda", name: "Rename PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "Rename PDF tool icon", description: "Change the filename of your PDF document easily.",  score: 4.2,  reviews: 52,  url: "https://www.sejda.com/rename-pdf",  tutorial: "https://www.sejda.com/rename-pdf", faq: "https://www.sejda.com/rename-pdf" },
    { id: "pdf-croppdf-sejda", name: "Crop PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Crop PDF tool icon", description: "Crop pages in your PDF to remove unwanted margins.", score: 4.3, reviews: 60, url: "https://www.sejda.com/crop-pdf", tutorial: "https://www.sejda.com/crop-pdf", faq: "https://www.sejda.com/crop-pdf" },
    { id: "pdf-rotatepdf-sejda", name: "Rotate PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "Rotate PDF tool icon", description: "Rotate pages in your PDF document online.", score: 4.4, reviews: 70,  url: "https://www.sejda.com/rotate-pdf-pages", tutorial: "https://www.sejda.com/rotate-pdf-pages", faq: "https://www.sejda.com/rotate-pdf-pages" },
    { id: "pdf-repairpdf-sejda", name: "Repair PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Repair PDF tool icon", description: "Fix corrupted or damaged PDF files.", score: 4.3, reviews: 58, url: "https://www.sejda.com/repair-pdf", tutorial: "https://www.sejda.com/repair-pdf",  faq: "https://www.sejda.com/repair-pdf" },
    { id: "pdf-resizepdf-sejda", name: "Resize PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Resize PDF tool icon", description: "Change the paper size of your PDF document.", score: 4.2, reviews: 49,  url: "https://www.sejda.com/resize-pdf",  tutorial: "https://www.sejda.com/resize-pdf", faq: "https://www.sejda.com/resize-pdf" },
     {id: "pdf-addpagenumber-sejda", name: "Add Page Numbers (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Add Page Numbers tool icon", description: "Insert page numbers into your PDF file.", score: 4.4, reviews: 77, url: "https://www.sejda.com/page-numbers-pdf", tutorial: "https://www.sejda.com/page-numbers-pdf", faq: "https://www.sejda.com/page-numbers-pdf" },
     { id: "pdf-pdfeditor-sejda", name: "PDF Editor (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "PDF Editor tool icon", description: "Edit PDF text, images, and more with Sejda.",  score: 4.6, reviews: 135, url: "https://www.sejda.com/pdf-editor", tutorial: "https://www.sejda.com/pdf-editor", faq: "https://www.sejda.com/pdf-editor" },
     { id: "pdf-deletepages-sejda", name: "Delete Pages from PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Delete PDF Pages tool icon",  description: "Remove selected pages from your PDF document.", score: 4.4, reviews: 90, url: "https://www.sejda.com/delete-pdf-pages", tutorial: "https://www.sejda.com/delete-pdf-pages", faq: "https://www.sejda.com/delete-pdf-pages" },
     { id: "pdf-signpdf-sejda", name: "Fill & Sign PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt: "Fill and Sign PDF tool icon", description: "Fill out forms and add signatures to your PDFs.",  score: 4.5,  reviews: 108,  url: "https://www.sejda.com/sign-pdf", tutorial: "https://www.sejda.com/sign-pdf",  faq: "https://www.sejda.com/sign-pdf" },
     { id: "pdf-deskew-sejda", name: "Deskew PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S",  iconAlt:  "Deskew PDF tool icon", description: "Straighten scanned PDF pages automatically.", score: 4.2, reviews: 86, url: "https://www.sejda.com/deskew-pdf", tutorial: "https://www.sejda.com/deskew-pdf",  faq: "https://www.sejda.com/deskew-pdf" },
     { id: "pdf-ocr-sejda", name: "OCR PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "OCR PDF tool icon", description: "Convert scanned PDFs into searchable text using OCR.", score: 4.3, reviews: 102,  url: "https://www.sejda.com/ocr-pdf", tutorial: "https://www.sejda.com/ocr-pdf", faq: "https://www.sejda.com/ocr-pdf" },
      { id: "pdf-compress-sejda", name: "Compress PDF (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "Compress PDF icon", description: "Reduce the file size of your PDF documents with Sejda.", score: 4.8, reviews: 200, url: "https://www.sejda.com/compress-pdf", tutorial: "https://www.sejda.com/compress-pdf", faq: "https://www.sejda.com/compress-pdf" },
        { id: "pdf-pdftoword-sejda", name: "PDF to Word (Sejda)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=S", iconAlt: "PDF to Word icon", description: "Convert PDF files to editable Word documents with Sejda.", score: 4.7, reviews: 170, url: "https://www.sejda.com/pdf-to-word", tutorial: "https://www.sejda.com/pdf-to-word", faq: "https://www.sejda.com/pdf-to-word" },

     // ... (ADD ALL our PDF24 TOOLS HERE)

     { id: "pdf-pngtopdf-pdf24", name: "PNG to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PNG to PDF tool icon",  description: "Convert PNG images to PDF files easily with PDF24.", score: 4.3,  reviews: 102, url: "https://tools.pdf24.org/en/png-to-pdf", tutorial: "https://tools.pdf24.org/en/png-to-pdf", faq: "https://tools.pdf24.org/en/png-to-pdf" },
    { id: "pdf-webptopdf-pdf24", name: "WEBP to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "WEBP to PDF tool icon", description: "Convert WEBP image files to PDF using PDF24.",  score: 4.2, reviews: 88, url: "https://tools.pdf24.org/en/webp-to-pdf",  tutorial: "https://tools.pdf24.org/en/webp-to-pdf",  faq: "https://tools.pdf24.org/en/webp-to-pdf" },
    { id: "pdf-heictopdf-pdf24", name: "HEIC to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "HEIC to PDF tool icon",  description: "Convert HEIC images to PDF files online with PDF24.",  score: 4.1, reviews: 77, url: "https://tools.pdf24.org/en/heic-to-pdf", tutorial: "https://tools.pdf24.org/en/heic-to-pdf", faq: "https://tools.pdf24.org/en/heic-to-pdf" },
    {  id: "pdf-imagestopdf-pdf24", name: "Images to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Images to PDF tool icon", description: "Combine multiple images into a single PDF with PDF24.", score: 4.4,  reviews: 93, url: "https://tools.pdf24.org/en/images-to-pdf",  tutorial: "https://tools.pdf24.org/en/images-to-pdf",  faq: "https://tools.pdf24.org/en/images-to-pdf" },
    { id: "pdf-svgtopdf-pdf24", name: "SVG to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "SVG to PDF tool icon", description: "Convert SVG vector graphics to PDF files easily.",  score: 4.3,  reviews: 74,  url: "https://tools.pdf24.org/en/svg-to-pdf", tutorial: "https://tools.pdf24.org/en/svg-to-pdf", faq: "https://tools.pdf24.org/en/svg-to-pdf" },
    { id: "pdf-docxtopdf-pdf24", name: "Docx to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "Docx to PDF tool icon",  description: "Convert Word Docx files to PDF format with PDF24.",  score: 4.6,  reviews: 145,  url: "https://tools.pdf24.org/en/docx-to-pdf",  tutorial: "https://tools.pdf24.org/en/docx-to-pdf",  faq: "https://tools.pdf24.org/en/docx-to-pdf" },
    { id: "pdf-pptxtopdf-pdf24",  name: "PPTX to PDF (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PPTX to PDF tool icon", description: "Convert PowerPoint PPTX files to PDF format.", score: 4.4,  reviews: 96,  url: "https://tools.pdf24.org/en/pptx-to-pdf", tutorial: "https://tools.pdf24.org/en/pptx-to-pdf", faq: "https://tools.pdf24.org/en/pptx-to-pdf" },
    { id: "pdf-xlsxtopdf-pdf24", name: "XLSX to PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "XLSX to PDF tool icon", description: "Convert Excel XLSX spreadsheets into PDF documents.",  score: 4.4, reviews: 101,  url: "https://tools.pdf24.org/en/xlsx-to-pdf", tutorial: "https://tools.pdf24.org/en/xlsx-to-pdf",  faq: "https://tools.pdf24.org/en/xlsx-to-pdf" },
    { id: "pdf-halvepages-pdf24", name: "Halve PDF Pages (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Halve PDF Pages tool icon", description: "Split wide pages in half to create separate pages using PDF24.",  score: 4.3, reviews: 67,  url: "http://tools.pdf24.org/en/halve-pdf-pages", tutorial: "http://tools.pdf24.org/en/halve-pdf-pages", faq: "http://tools.pdf24.org/en/halve-pdf-pages" },
  { id: "pdf-croppdf-pdf24", name: "Crop PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Crop PDF tool icon", description: "Remove margins or unwanted content from PDF pages.",  score: 4.4,  reviews: 78,  url: "https://tools.pdf24.org/en/crop-pdf",  tutorial: "https://tools.pdf24.org/en/crop-pdf", faq: "https://tools.pdf24.org/en/crop-pdf" },
  { id: "pdf-flattenpdf-pdf24", name: "Flatten PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Flatten PDF tool icon", description: "Convert interactive elements to static content in PDF.",  score: 4.3,  reviews: 69,  url: "https://tools.pdf24.org/en/flatten-pdf",  tutorial: "https://tools.pdf24.org/en/flatten-pdf",  faq: "https://tools.pdf24.org/en/flatten-pdf" },
  { id : "pdf-pdftortf-pdf24", name: "PDF to RTF (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to RTF tool icon", description: "Convert your PDF documents into RTF format easily.",  score: 4.4, reviews: 73,  url: "https://tools.pdf24.org/en/pdf-to-rtf", tutorial: "https://tools.pdf24.org/en/pdf-to-rtf",  faq: "https://tools.pdf24.org/en/pdf-to-rtf" },
  { id : "pdf-pdftoepub-pdf24", name: "PDF to EPUB (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to EPUB tool icon", description: "Convert PDF documents to EPUB format for e-readers.", score: 4.5, reviews: 81,  url: "https://tools.pdf24.org/en/pdf-to-epub", tutorial: "https://tools.pdf24.org/en/pdf-to-epub", faq: "https://tools.pdf24.org/en/pdf-to-epub" },
  { id : "pdf-pdftohtml-pdf24",  name: "PDF to HTML (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to HTML tool icon", description: "Convert PDF files into HTML web pages.",  score: 4.4, reviews: 74,  url: "https://tools.pdf24.org/en/pdf-to-html",  tutorial: "https://tools.pdf24.org/en/pdf-to-html",  faq: "https://tools.pdf24.org/en/pdf-to-html" },
  { id : "pdf-pdftosecurepdf-pdf24", name: "PDF to Secure PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to Secure PDF tool icon", description: "Protect PDF files by converting them into secure versions.", score: 4.4, reviews: 70,  url: "https://tools.pdf24.org/en/pdf-to-secure-pdf",  tutorial: "https://tools.pdf24.org/en/pdf-to-secure-pdf",  faq: "https://tools.pdf24.org/en/pdf-to-secure-pdf" },
  { id : "pdf-pdftopdfa-pdf24", name: "PDF to PDF/A (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to PDF/A tool icon", description: "Convert PDFs to PDF/A format for archiving.", score: 4.6, reviews: 91, url: "https://tools.pdf24.org/en/pdf-to-pdfa", tutorial: "https://tools.pdf24.org/en/pdf-to-pdfa",  faq: "https://tools.pdf24.org/en/pdf-to-pdfa" },
     { id: "pdf-pdftoxlsx-pdf24", name: "PDF to XLSX (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to XLSX tool icon", description: "Convert PDF files into Excel XLSX format with ease.", score: 4.5, reviews: 86, url: "https://tools.pdf24.org/en/pdf-to-xlsx", tutorial: "https://tools.pdf24.org/en/pdf-to-xlsx", faq: "https://tools.pdf24.org/en/pdf-to-xlsx" },
 { id: "pdf-pdftoodt-pdf24", name: "PDF to ODT (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to ODT tool icon", description: "Convert PDF documents to ODT format for OpenOffice or LibreOffice.", score: 4.4,  reviews: 68,  url: "https://tools.pdf24.org/en/pdf-to-odt", tutorial: "https://tools.pdf24.org/en/pdf-to-odt",  faq: "https://tools.pdf24.org/en/pdf-to-odt" },
  { id: "pdf-pdftoods-pdf24", name: "PDF to ODS (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to ODS tool icon", description: "Convert your PDF data into spreadsheet ODS format.", score: 4.3, reviews: 63, url: "https://tools.pdf24.org/en/pdf-to-ods", tutorial: "https://tools.pdf24.org/en/pdf-to-ods",  faq: "https://tools.pdf24.org/en/pdf-to-ods" },
  { id: "pdf-pdftoodp-pdf24", name: "PDF to ODP (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to ODP tool icon",  description: "Convert PDF documents to ODP format for presentations.", score: 4.4, reviews: 69, url: "https://tools.pdf24.org/en/pdf-to-odp", tutorial: "https://tools.pdf24.org/en/pdf-to-odp", faq: "https://tools.pdf24.org/en/pdf-to-odp" },
  { id: "pdf-pdftoimages-pdf24", name: "PDF to Images (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to Images tool icon",  description: "Convert PDF pages to image files easily.",  score: 4.6, reviews: 105,  url: "https://tools.pdf24.org/en/pdf-to-images", tutorial: "https://tools.pdf24.org/en/pdf-to-images", faq: "https://tools.pdf24.org/en/pdf-to-images"  },
  {  id: "pdf-pdftodocx-pdf24",  name: "PDF to DOCX (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to DOCX tool icon",  description: "Convert PDF files into editable DOCX Word format.",  score: 4.5,  reviews: 110, url: "https://tools.pdf24.org/en/pdf-to-docx",  tutorial: "https://tools.pdf24.org/en/pdf-to-docx",  faq: "https://tools.pdf24.org/en/pdf-to-docx" },
  { id: "pdf-pdftosvg-pdf24", name: "PDF to SVG (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to SVG tool icon",  description: "Convert PDF documents into SVG vector images.",  score: 4.4, reviews: 66, url: "https://tools.pdf24.org/en/pdf-to-svg", tutorial: "https://tools.pdf24.org/en/pdf-to-svg",  faq: "https://tools.pdf24.org/en/pdf-to-svg" },
  {  id: "pdf-pdftopng-pdf24",  name: "PDF to PNG (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to PNG tool icon", description: "Convert PDF pages into PNG image files.", score: 4.5, reviews: 95, url: "https://tools.pdf24.org/en/pdf-to-png",  tutorial: "https://tools.pdf24.org/en/pdf-to-png",  faq: "https://tools.pdf24.org/en/pdf-to-png" },
 { id: "pdf-pdftojpg-pdf24", name: "PDF to JPG (PDF24)",  icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "PDF to JPG tool icon",  description: "Convert PDF files to high-quality JPG images.",  score: 4.5,  reviews: 112, url: "https://tools.pdf24.org/en/pdf-to-jpg", tutorial: "https://tools.pdf24.org/en/pdf-to-jpg", faq: "https://tools.pdf24.org/en/pdf-to-jpg" },
  { id: "pdf-pdftoppt-pdf24", name: "PDF to PowerPoint (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to PowerPoint tool icon", description: "Convert PDF documents into PowerPoint presentations.", score: 4.4,  reviews: 78, url: "https://tools.pdf24.org/en/pdf-to-powerpoint", tutorial: "https://tools.pdf24.org/en/pdf-to-powerpoint", faq: "https://tools.pdf24.org/en/pdf-to-powerpoint" },
    { id: "pdf-pdftotxt-pdf24", name: "PDF to Text (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to Text tool icon", description: "Extract plain text content from PDF files.", score: 4.3, reviews: 74, url: "https://tools.pdf24.org/en/pdf-to-txt", tutorial: "https://tools.pdf24.org/en/pdf-to-txt",  faq: "https://tools.pdf24.org/en/pdf-to-txt" },
   { id: "pdf-pdftoword-pdf24", name: "PDF to Word (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to Word tool icon", description: "Convert PDF documents into editable Word format.",  score: 4.6,  reviews: 120, url: "https://tools.pdf24.org/en/pdf-to-word", tutorial: "https://tools.pdf24.org/en/pdf-to-word", faq: "https://tools.pdf24.org/en/pdf-to-word" },
   { id: "pdf-signpdf-pdf24", name: "Sign PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Sign PDF tool icon", description: "Add digital signatures to your PDF documents.", score: 4.5, reviews: 101, url: "https://tools.pdf24.org/en/sign-pdf",  tutorial: "https://tools.pdf24.org/en/sign-pdf", faq: "https://tools.pdf24.org/en/sign-pdf" },
   { id: "pdf-splitpdf-pdf24", name: "Split PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Split PDF tool icon", description: "Split large PDF files into smaller documents.",  score: 4.4,  reviews: 92, url: "https://tools.pdf24.org/en/split-pdf", tutorial: "https://tools.pdf24.org/en/split-pdf", faq: "https://tools.pdf24.org/en/split-pdf" },
   { id: "pdf-pdfconverter-pdf24", name: "PDF Converter (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF Converter tool icon", description: "Convert to and from PDF format using various file types.", score: 4.3, reviews: 87, url: "https://tools.pdf24.org/en/pdf-converter",  tutorial: "https://tools.pdf24.org/en/pdf-converter",  faq: "https://tools.pdf24.org/en/pdf-converter" },
   {  id: "pdf-viewpdf-pdf24", name: "View as PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "View PDF tool icon", description: "Open and view PDF files in your browser.",  score: 4.1, reviews: 59, url: "https://tools.pdf24.org/en/view-pdf", tutorial: "https://tools.pdf24.org/en/view-pdf", faq: "https://tools.pdf24.org/en/view-pdf" },
   { id: "pdf-editpdf-pdf24", name: "Edit PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Edit PDF tool icon", description: "Edit the content of your PDF file directly online.", score: 4.5, reviews: 119, url: "https://tools.pdf24.org/en/edit-pdf", tutorial: "https://tools.pdf24.org/en/edit-pdf", faq: "https://tools.pdf24.org/en/edit-pdf" },
   { id: "pdf-pdftoimages-pdf24", name: "PDF to Images (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "PDF to Images tool icon", description: "Convert PDF pages into image files (PNG, JPG, etc).",  score: 4.5, reviews: 122, url: "https://tools.pdf24.org/en/pdf-to-images", tutorial: "https://tools.pdf24.org/en/pdf-to-images",  faq: "https://tools.pdf24.org/en/pdf-to-images" },
   { id: "pdf-extractimages-pdf24", name: "Extract PDF Images (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Extract Images tool icon", description: "Extract all images from your PDF files.", score: 4.3, reviews: 84, url: "https://tools.pdf24.org/en/extract-images", tutorial: "https://tools.pdf24.org/en/extract-images", faq: "https://tools.pdf24.org/en/extract-images" },
   { id: "pdf-extractpages-pdf24", name: "Extract PDF Pages (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Extract PDF Pages tool icon", description: "Extract specific pages from a PDF document.", score: 4.4, reviews: 91, url: "https://tools.pdf24.org/en/extract-pdf-pages", tutorial: "https://tools.pdf24.org/en/extract-pdf-pages", faq: "https://tools.pdf24.org/en/extract-pdf-pages" },
   { id: "pdf-comparepdfs-pdf24", name: "Compare PDFs (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Compare PDF tool icon", description: "Compare two PDF documents side by side.", score: 4.3, reviews: 79,  url: "https://tools.pdf24.org/en/compare-pdf",  tutorial: "https://tools.pdf24.org/en/compare-pdf",  faq: "https://tools.pdf24.org/en/compare-pdf" },
    { id: "pdf-rearrangepdf-pdf24", name: "Rearrange PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24",  iconAlt: "Rearrange PDF Pages tool icon", description: "Change the order of PDF pages easily.",  score: 4.2, reviews: 74, url: "https://tools.pdf24.org/en/rearrange-pdf-pages", tutorial: "https://tools.pdf24.org/en/rearrange-pdf-pages", faq: "https://tools.pdf24.org/en/rearrange-pdf-pages" },
    { id: "pdf-createpdfcamera-pdf24", name: "Create PDF with Camera (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Scan to PDF tool icon", description: "Use your camera to scan and create PDF documents.", score: 4.3, reviews: 80, url: "https://tools.pdf24.org/en/scan-pdf", tutorial: "https://tools.pdf24.org/en/scan-pdf", faq: "https://tools.pdf24.org/en/scan-pdf" },
    { id: "pdf-addpagenumber2-pdf24", name: "Add Page Numbers (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Add Page Numbers tool icon", description: "Insert page numbers into PDF files.", score: 4.4, reviews: 89, url: "https://tools.pdf24.org/en/add-page-numbers",  tutorial: "https://tools.pdf24.org/en/add-page-numbers", faq: "https://tools.pdf24.org/en/add-page-numbers" },
    { id: "pdf-addwatermark-pdf24", name: "Add Watermark (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Add Watermark tool icon", description: "Insert watermark text or image in your PDF.", score: 4.2, reviews: 68, url: "https://tools.pdf24.org/en/add-watermark", tutorial: "https://tools.pdf24.org/en/add-watermark", faq: "https://tools.pdf24.org/en/add-watermark"  },
   { id: "pdf-changepagesize-pdf24",  name: "Change PDF Page Size (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Change Page Size tool icon", description: "Resize the pages of your PDF document.",  score: 4.2,  reviews: 67, url: "https://tools.pdf24.org/en/change-pdf-page-size", tutorial: "https://tools.pdf24.org/en/change-pdf-page-size",  faq: "https://tools.pdf24.org/en/change-pdf-page-size" },
    { id: "pdf-removemetadata-pdf24", name: "Remove PDF Metadata (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Remove PDF Metadata tool icon", description: "Delete metadata from your PDF file.", score: 4.1, reviews: 61, url: "https://tools.pdf24.org/en/remove-pdf-metadata", tutorial: "https://tools.pdf24.org/en/remove-pdf-metadata", faq: "https://tools.pdf24.org/en/remove-pdf-metadata" },
    { id: "pdf-editmetadata-pdf24", name: "Edit PDF Metadata (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Edit PDF Metadata tool icon", description: "Change the metadata of your PDF file.", score: 4.2, reviews: 64, url: "https://tools.pdf24.org/en/edit-pdf-metadata", tutorial: "https://tools.pdf24.org/en/edit-pdf-metadata", faq: "https://tools.pdf24.org/en/edit-pdf-metadata" },
    { id: "pdf-optimizeweb-pdf24", name: "Web Optimize PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Optimize PDF tool icon",  description: "Optimize PDF file size for web usage.",  score: 4.3, reviews: 66, url: "https://tools.pdf24.org/en/optimize-pdf", tutorial: "https://tools.pdf24.org/en/optimize-pdf",  faq: "https://tools.pdf24.org/en/optimize-pdf" },
    { id: "pdf-editbookmarks-pdf24", name: "Edit PDF Bookmarks (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Edit Bookmarks tool icon", description: "Edit or add bookmarks in PDF documents.", score: 4.1, reviews: 60,  url: "https://tools.pdf24.org/en/edit-pdf-bookmarks", tutorial: "https://tools.pdf24.org/en/edit-pdf-bookmarks",  faq: "https://tools.pdf24.org/en/edit-pdf-bookmarks" },
    { id: "pdf-fillform-pdf24", name: "Fill Out PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Fill PDF Form tool icon", description: "Fill out interactive PDF forms online.", score: 4.4,  reviews: 73,  url: "https://tools.pdf24.org/en/fill-pdf",  tutorial: "https://tools.pdf24.org/en/fill-pdf",  faq: "https://tools.pdf24.org/en/fill-pdf" },
    { id: "pdf-repairpdf-pdf24", name: "Repair PDF (PDF24)", icon: "https://placehold.co/80x80/00589C/ffffff?text=P24", iconAlt: "Repair PDF tool icon", description: "Fix corrupted or damaged PDF files.", score: 4.3, reviews: 71, url: "https://tools.pdf24.org/en/repair-pdf", tutorial: "https://tools.pdf24.org/en/repair-pdf", faq: "https://tools.pdf24.org/en/repair-pdf" },
    
        { id: "pdf-pngtopdf-pdf24", name: "PNG to PDF (PDF24)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=P24", iconAlt: "PNG to PDF icon", description: "Convert PNG images to PDF using PDF24 Tools.", score: 4.4, reviews: 90, url: "https://tools.pdf24.org/en/png-to-pdf", tutorial: "https://tools.pdf24.org/en/png-to-pdf", faq: "https://tools.pdf24.org/en/png-to-pdf" },
        { id: "pdf-webptopdf-pdf24", name: "WebP to PDF (PDF24)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=P24", iconAlt: "WebP to PDF icon", description: "Convert WebP images to PDF using PDF24 Tools.", score: 4.3, reviews: 70, url: "https://tools.pdf24.org/en/webp-to-pdf", tutorial: "https://tools.pdf24.org/en/webp-to-pdf", faq: "https://tools.pdf24.org/en/webp-to-pdf" },
        
        { id: "pdf-edit-pdf24", name: "Edit PDF (PDF24)", icon: "https://placehold.co/80x80/0284C7/ffffff?text=P24", iconAlt: "Edit PDF icon", description: "Edit PDF files online with PDF24 editor.", score: 4.5, reviews: 150, url: "https://tools.pdf24.org/en/edit-pdf", tutorial: "https://tools.pdf24.org/en/edit-pdf", faq: "https://tools.pdf24.org/en/edit-pdf" },


      // ... (ADD ALL our iLovepdf TOOLS HERE)
     { id: "pdf-scanpdf-ilovepdf", name: "Scan to PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP",  iconAlt: "Scan to PDF tool icon",  description: "Scan documents and save them as PDFs with iLovePDF.",  score: 4.4,  reviews: 92,  url: "https://www.ilovepdf.com/scan-pdf",  tutorial: "https://www.ilovepdf.com/scan-pdf",  faq: "https://www.ilovepdf.com/scan-pdf" },
    { id: "pdf-redactpdf-ilovepdf", name: "Redact PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "Redact PDF tool icon", description: "Hide sensitive information in PDF files securely.", score: 4.3, reviews: 76,  url: "https://www.ilovepdf.com/redact-pdf", tutorial: "https://www.ilovepdf.com/redact-pdf", faq: "https://www.ilovepdf.com/redact-pdf" },
    { id: "pdf-comparepdf-ilovepdf", name: "Compare PDFs (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "Compare PDF tool icon", description: "Quickly compare two PDF documents and spot differences.",  score: 4.4,  reviews: 84,  url: "https://www.ilovepdf.com/compare-pdf", tutorial: "https://www.ilovepdf.com/compare-pdf", faq: "https://www.ilovepdf.com/compare-pdf" },
    { id: "pdf-htmltopdf-ilovepdf", name: "HTML to PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "HTML to PDF tool icon", description: "Convert any web page or HTML file into a PDF.", score: 4.5, reviews: 89, url: "https://www.ilovepdf.com/html-to-pdf", tutorial: "https://www.ilovepdf.com/html-to-pdf", faq: "https://www.ilovepdf.com/html-to-pdf" },
    { id: "pdf-signpdf-ilovepdf", name: "Add Sign to PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "Sign PDF tool icon", description: "Easily Add sign your PDF documents online with iLovePDF.", score: 4.6, reviews: 132, url: "https://www.ilovepdf.com/sign-pdf", tutorial: "https://www.ilovepdf.com/sign-pdf", faq: "https://www.ilovepdf.com/sign-pdf" },    
    { id: "pdf-lockpdf-ilovepdf", name: "Lock PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "Lock PDF tool icon", description: "Add password protection to your PDF files.", score: 4.6, reviews: 127, url: "https://www.ilovepdf.com/protect-pdf",  tutorial: "https://www.ilovepdf.com/protect-pdf", faq: "https://www.ilovepdf.com/protect-pdf" },
     { id: "pdf-ocr-ilovepdf", name: "OCR PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "OCR PDF icon", description: "Recognize text in scanned PDFs to make them searchable with iLovePDF.", score: 4.5, reviews: 115, url: "https://www.ilovepdf.com/ocr-pdf", tutorial: "https://www.ilovepdf.com/ocr-pdf", faq: "https://www.ilovepdf.com/ocr-pdf" },
       
     { id: "pdf-unlock-ilovepdf", name: "Unlock PDF (iLovePDF)", icon: "https://placehold.co/80x80/2563EB/ffffff?text=ILP", iconAlt: "Unlock PDF icon", description: "Remove PDF password security with iLovePDF.", score: 4.5, reviews: 130, url: "https://www.ilovepdf.com/unlock_pdf", tutorial: "https://www.ilovepdf.com/unlock_pdf", faq: "https://www.ilovepdf.com/unlock_pdf" },
      
      ],
      image: [
        // --- Add all images tools here  ---

        { id: "image-reduce-pi7", name: "Reduce Image Size (pi7.org)", icon: "https://placehold.co/80x80/218900/ffffff?text=PI7", iconAlt: "Reduce image size icon", description: "Reduce image file size in KB online using pi7.org's free tool.", score: 4.5,  reviews: 97, url: "https://image.pi7.org/reduce-image-size-in-kb", tutorial: "https://image.pi7.org/reduce-image-size-in-kb", faq: "https://image.pi7.org/reduce-image-size-in-kb" },
        { id: "image-removebg-removebg", name: "Remove Background (Remove.bg)", icon: "https://placehold.co/80x80/218900/ffffff?text=RBG", iconAlt: "Remove Background icon", description: "Remove image backgrounds automatically in 5 seconds.", score: 4.8, reviews: 200, url: "https://www.remove.bg/upload", tutorial: "https://www.remove.bg/upload", faq: "https://www.remove.bg/upload" },
        { id: "image-compress-iloveimg", name: "Compress Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Compress Image icon", description: "Compress JPG, PNG, SVG, GIF images with iLoveIMG.", score: 4.7, reviews: 150, url: "https://www.iloveimg.com/compress-image", tutorial: "https://www.iloveimg.com/compress-image", faq: "https://www.iloveimg.com/compress-image" },
        { id: "image-resize-iloveimg", name: "Resize Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Resize Image icon", description: "Resize JPG, PNG, SVG, GIF by defining new height and width pixels.", score: 4.6, reviews: 140, url: "https://www.iloveimg.com/resize-image", tutorial: "https://www.iloveimg.com/resize-image", faq: "https://www.iloveimg.com/resize-image" },
        { id: "image-memegenerator-iloveimg", name: "Meme Generator (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Meme generator tool icon", description: "Create fun memes using your own images.", score: 4.7, reviews: 121, url: "https://www.iloveimg.com/meme-generator", tutorial: "https://www.iloveimg.com/meme-generator", faq: "https://www.iloveimg.com/meme-generator" },
        { id: "image-htmltoimage-iloveimg", name: "HTML to Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "HTML to image icon", description: "Convert HTML pages into image format easily.", score: 4.5, reviews: 101, url: "https://www.iloveimg.com/html-to-image", tutorial: "https://www.iloveimg.com/html-to-image", faq: "https://www.iloveimg.com/html-to-image"},
        { id: "image-rotate-iloveimg", name: "Rotate Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Rotate image tool icon", description: "Quickly rotate your images in any direction.", score: 4.4, reviews: 89, url: "https://www.iloveimg.com/rotate-image", tutorial: "https://www.iloveimg.com/rotate-image", faq: "https://www.iloveimg.com/rotate-image" },
        { id: "image-blur-iloveimg", name: "Blur Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Blur image tool icon", description: "Blur parts of an image, including faces.", score: 4.6, reviews: 112, url: "https://www.iloveimg.com/blur-face", tutorial: "https://www.iloveimg.com/blur-face", faq: "https://www.iloveimg.com/blur-face" },

       
        
       { id: "image-circlecrop-imageonline", name: "Circle Crop Image (ImageOnline)", icon: "https://placehold.co/80x80/218900/ffffff?text=IO", iconAlt: "Circle Crop Image icon", description: "Crop your image into a perfect circle online.", score: 4.3, reviews: 67, url: "https://crop-circle.imageonline.co/", tutorial: "https://crop-circle.imageonline.co/", faq: "https://crop-circle.imageonline.co/" },
       { id: "image-editor-canva", name: "Free Online Image Editor (Canva)", icon: "https://placehold.co/80x80/218900/ffffff?text=CA", iconAlt: "Canva photo editor icon", description: "Edit images with Canva’s powerful free tools.", score: 4.9, reviews: 300, url: "https://www.canva.com/photo-editor/", tutorial: "https://www.canva.com/photo-editor/", faq: "https://www.canva.com/photo-editor/" },
       { id: "image-editorai-deepai", name: "AI Photo Editor (DeepAI)", icon: "https://placehold.co/80x80/4DC427/ffffff?text=DAI", iconAlt: "AI image editor icon", description: "Use AI tools to enhance or modify photos.", score: 4.3, reviews: 76, url: "https://deepai.org/machine-learning-model/image-editor", tutorial: "https://deepai.org/machine-learning-model/image-editor", faq: "https://deepai.org/machine-learning-model/image-editor" },
        { id: "image-editorai-photoroom", name: "AI Photo Editor (PhotoRoom)", icon: "https://placehold.co/80x80/4DC427/ffffff?text=PRM", iconAlt: "AI image editor photoroom icon", description: "Smart photo editing with PhotoRoom AI tools.", score: 4.8, reviews: 185, url: "https://app.photoroom.com/create", tutorial: "https://app.photoroom.com/create", faq: "https://app.photoroom.com/create" },
       { id: "image-enhancer-remini", name: "Photo Enhancer (Remini)", icon: "https://placehold.co/80x80/4DC427/ffffff?text=RM", iconAlt: "Remini photo enhancer icon", description: "Enhance image quality with Remini AI.", score: 4.7, reviews: 211, url: "https://app.remini.ai/?v=8201b007-476c-4a2d-89e1-50c5d3dcbc77-1748689039133", tutorial: "https://app.remini.ai/?v=8201b007-476c-4a2d-89e1-50c5d3dcbc77-1748689039133", faq: "https://app.remini.ai/?v=8201b007-476c-4a2d-89e1-50c5d3dcbc77-1748689039133" },
       { id: "image-addbgcolor-removebg", name: "Add Background Color (Remove.bg)", icon: "https://placehold.co/80x80/218900/ffffff?text=RB", iconAlt: "Add background color icon", description: "Change or add background color to images easily.",  score: 4.6, reviews: 134, url: "https://www.remove.bg/t/change-background", tutorial: "https://www.remove.bg/t/change-background", faq: "https://www.remove.bg/t/change-background" },


        { id: "image-converttojpg-iloveimg", name: "Convert to JPG (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Convert to JPG icon", description: "Convert PNG, GIF, or other formats to JPG easily.",  score: 4.6,  reviews: 142, url: "https://www.iloveimg.com/convert-to-jpg", tutorial: "https://www.iloveimg.com/convert-to-jpg", faq: "https://www.iloveimg.com/convert-to-jpg" },
        { id: "image-jpgtoconvert-iloveimg", name: "Convert from JPG (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI",  iconAlt: "Convert from JPG icon", description: "Convert JPG images to PNG, GIF, or other formats.", score: 4.5, reviews: 123, url: "https://www.iloveimg.com/jpg-to-image", tutorial: "https://www.iloveimg.com/jpg-to-image", faq: "https://www.iloveimg.com/jpg-to-image" },
       { id: "image-editor-iloveimg", name: "Photo Editor (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Photo Editor tool icon", description: "Edit images online with iLoveIMG’s photo editor.", score: 4.4, reviews: 110, url: "https://www.iloveimg.com/photo-editor", tutorial: "https://www.iloveimg.com/photo-editor", faq: "https://www.iloveimg.com/photo-editor" },
       { id: "image-crop-iloveimg", name: "Crop Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Crop Image icon", description: "Crop JPG, PNG, or GIF images online.", score: 4.5, reviews: 101, url: "https://www.iloveimg.com/crop-image", tutorial: "https://www.iloveimg.com/crop-image", faq: "https://www.iloveimg.com/crop-image" },
       { id: "image-upscale-iloveimg", name: "Upscale Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Upscale Image tool icon", description: "Increase image resolution without losing quality.",  score: 4.6, reviews: 135, url: "https://www.iloveimg.com/upscale-image", tutorial: "https://www.iloveimg.com/upscale-image", faq: "https://www.iloveimg.com/upscale-image" },
       { id: "image-watermark-iloveimg", name: "Watermark Image (iLoveIMG)", icon: "https://placehold.co/80x80/16A34A/ffffff?text=ILI", iconAlt: "Watermark Image tool icon", description: "Add text or image watermarks online.", score: 4.5, reviews: 112, url: "https://www.iloveimg.com/watermark-image", tutorial: "https://www.iloveimg.com/watermark-image", faq: "https://www.iloveimg.com/watermark-image" },
       
      ],
      seo: [
        // --- ADD ALL SEO tools here ---
         { id: "seo-trafficchecker-ahrefs", name: "Website Traffic Checker (Ahrefs)", icon: "https://placehold.co/80x80/FBAA00/ffffff?text=AH", iconAlt: "Ahrefs traffic checker icon", description: "Check traffic stats of any website with Ahrefs.", score: 4.8, reviews: 220, url: "https://ahrefs.com/traffic-checker", tutorial: "https://ahrefs.com/traffic-checker", faq: "https://ahrefs.com/traffic-checker" },
        { id: "seo-trafficchecker-seranking", name: "Website Traffic Analysis (SE Ranking)", icon: "https://placehold.co/80x80/FBAA00/ffffff?text=SR", iconAlt: "SE Ranking traffic analyzer icon", description: "Analyze your website traffic using SE Ranking.", score: 4.6, reviews: 160, url: "https://seranking.com/website-traffic-checker.html", tutorial: "https://seranking.com/website-traffic-checker.html", faq: "https://seranking.com/website-traffic-checker.html" },
       { id: "seo-trafficchecker-semrush", name: "Website Traffic Overview (SEMrush)", icon: "https://placehold.co/80x80/FBAA00/ffffff?text=SM", iconAlt: "SEMrush traffic checker icon", description: "Track traffic metrics and trends via SEMrush.", score: 4.9, reviews: 245, url: "https://www.semrush.com/website/", tutorial: "https://www.semrush.com/website/", faq: "https://www.semrush.com/website/" },
       { id: "seo-googleseochecker-seoreviewtools", name: "Google SEO Checker (SEO Review Tools)", icon: "https://placehold.co/80x80/F6D800/ffffff?text=SRT", iconAlt: "SEO review tools icon", description: "Check your Google SEO score and improve ranking.", score: 4.5, reviews: 137, url: "https://www.seoreviewtools.com/google-seo-checker/", tutorial: "https://www.seoreviewtools.com/google-seo-checker/", faq: "https://www.seoreviewtools.com/google-seo-checker/" },
       { id: "seo-checker-uberSuggest", name: "SEO Analyzer (Ubersuggest)", icon: "https://placehold.co/80x80/F6D800/ffffff?text=US", iconAlt: "Ubersuggest SEO tool icon", description: "Perform in-depth SEO audits and keyword analysis.", score: 4.6, reviews: 210, url: "https://neilpatel.com/ubersuggest/", tutorial: "https://neilpatel.com/ubersuggest/", faq: "https://neilpatel.com/ubersuggest/" },
       { id: "seo-siteaudit-woorank", name: "Site Audit (WooRank)", icon: "https://placehold.co/80x80/F6D800/ffffff?text=WR", iconAlt: "WooRank site audit icon", description: "Comprehensive website audit for SEO and performance.", score: 4.4, reviews: 98, url: "https://www.woorank.com/", tutorial: "https://www.woorank.com/", faq: "https://www.woorank.com/" },
      { id: "seo-health-seoptimer", name: "SEO Site Health Checker (SEOptimer)", icon: "https://placehold.co/80x80/F6D800/ffffff?text=SO", iconAlt: "SEOptimer site checker icon", description: "Evaluate SEO health with actionable suggestions.", score: 4.5, reviews: 123, url: "https://www.seoptimer.com/", tutorial: "https://www.seoptimer.com/", faq: "https://www.seoptimer.com/" },

        { id: "seo-analyzer-rankmath", name: "SEO Analyzer (RankMath)", icon: "https://placehold.co/80x80/eab308/ffffff?text=RM", iconAlt: "SEO Analyzer icon", description: "Analyze your website’s SEO with RankMath.", score: 4.7, reviews: 190, url: "https://rankmath.com/tools/seo-analyzer/", tutorial: "https://rankmath.com/tools/seo-analyzer/", faq: "https://rankmath.com/tools/seo-analyzer/" },
        { id: "seo-keywordresearch-wordstream", name: "Keyword Research Tool (WordStream)", icon: "https://placehold.co/80x80/eab308/ffffff?text=WS", iconAlt: "Keyword Research icon", description: "Find new keywords and analyze their performance.", score: 4.5, reviews: 130, url: "https://www.wordstream.com/keywords", tutorial: "https://www.wordstream.com/keywords", faq: "https://www.wordstream.com/keywords" },
        { id: "seo-backlinkchecker-semrush", name: "Backlink Checker (Semrush)", icon: "https://placehold.co/80x80/EAB308/ffffff?text=SR", iconAlt: "Backlink Checker icon", description: "Analyze any website's backlink profile.", score: 4.6, reviews: 150, url: "https://www.semrush.com/analytics/backlinks/", tutorial: "https://www.semrush.com/analytics/backlinks/", faq: "https://www.semrush.com/analytics/backlinks/" },
      ],
      text: [ 
        // --- Add all text tools here ---
        { id: "text-pdftotext-sejda", name: "PDF to Text (Sejda)", icon: "https://placehold.co/80x80/6366F1/ffffff?text=S", iconAlt: "PDF to Text icon", description: "Extract text from PDF files using Sejda.", score: 4.4, reviews: 100, url: "https://www.sejda.com/extract-text-from-pdf", tutorial: "https://www.sejda.com/extract-text-from-pdf", faq: "https://www.sejda.com/extract-text-from-pdf" },
        { id: "text-ocrpdf-ilovepdf", name: "OCR PDF (iLovePDF)", icon: "https://placehold.co/80x80/6366F1/ffffff?text=ILP", iconAlt: "OCR PDF icon", description: "Convert scanned PDFs to searchable PDFs with iLovePDF OCR.", score: 4.6, reviews: 120, url: "https://www.ilovepdf.com/ocr-pdf", tutorial: "https://www.ilovepdf.com/ocr-pdf", faq: "https://www.ilovepdf.com/ocr-pdf" },

        { id: "video-videototext-vizard", name: "Video to Text (Vizard)", icon: "https://placehold.co/80x80/6366f1/ffffff?text=VZ", iconAlt: "Video to text icon", description: "Convert speech in videos to text automatically.", score: 4.6, reviews: 124, url: "https://vizard.ai/tools/video-to-text", tutorial: "https://vizard.ai/tools/video-to-text", faq: "https://vizard.ai/tools/video-to-text" },

        { id: "text-youtubesummary-eightify", name: "YouTube Video Summarizer (Eightify)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=8F", iconAlt: "Eightify summary icon", description: "Summarize YouTube videos into key points instantly.", score: 4.7, reviews: 210, url: "https://eightify.app/", tutorial: "https://eightify.app/", faq: "https://eightify.app/" },
      { id: "text-grammar-languagetool", name: "Grammar & Style Checker (LanguageTool)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=LT", iconAlt: "Grammar checker icon", description: "Check grammar, style, and spelling errors in your writing.", score: 4.6, reviews: 150, url: "https://languagetool.org/", tutorial: "https://languagetool.org/", faq: "https://languagetool.org/" },
      { id: "text-rewriter-quirbot", name: "AI Text Rewriter (QuillBot)", icon: "https://placehold.co/80x80/3B82F6/ffffff?text=QB", iconAlt: "QuillBot icon", description: "Paraphrase and rewrite content using AI.", score: 4.8, reviews: 310, url: "https://quillbot.com/", tutorial: "https://quillbot.com/", faq: "https://quillbot.com/" },
      { id: "text-summary-tools4noobs", name: "Text Summarizer (Tools4Noobs)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=T4", iconAlt: "Text summarizer icon", description: "Summarize long articles and documents quickly.", score: 4.3, reviews: 92, url: "https://www.tools4noobs.com/summarize/", tutorial: "https://www.tools4noobs.com/summarize/", faq: "https://www.tools4noobs.com/summarize/" },
      { id: "text-docreader-summarizer", name: "Document Reader & Summarizer (Scholarcy)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=SC", iconAlt: "Scholarcy icon", description: "Summarize academic papers, articles and reports easily.", score: 4.5, reviews: 118, url: "https://www.scholarcy.com/", tutorial: "https://www.scholarcy.com/", faq: "https://www.scholarcy.com/" },
      { id: "text-generator-sassbook", name: "AI Text Generator (Sassbook)", icon: "https://placehold.co/80x80/3B82F6/ffffff?text=SB", iconAlt: "AI content generator icon", description: "Generate articles and summaries using AI instantly.", score: 4.4, reviews: 102, url: "https://sassbook.com/ai-writer", tutorial: "https://sassbook.com/ai-writer", faq: "https://sassbook.com/ai-writer" },
      { id: "text-readability-webfx", name: "Readability Test Tool (WebFX)", icon: "https://placehold.co/80x80/3B82F6/ffffff?text=RF", iconAlt: "Readability checker icon", description: "Check how readable your content is using Flesch & more.", score: 4.3, reviews: 85, url: "https://www.webfx.com/tools/read-able/", tutorial: "https://www.webfx.com/tools/read-able/", faq: "https://www.webfx.com/tools/read-able/" },
  { id: "text-texttoaudio-narakeet", name: "Text to Audio (Narakeet)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=NK", iconAlt: "Text to audio icon", description: "Convert written text into narrated audio or voiceover.", score: 4.6, reviews: 126, url: "https://www.narakeet.com/", tutorial: "https://www.narakeet.com/", faq: "https://www.narakeet.com/" },
      { id: "text-wordcount-grammarly", name: "Word Counter (Grammarly)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=GR", iconAlt: "Grammarly Word Counter icon", description: "Count words and characters easily with Grammarly's word counter.", score: 4.7, reviews: 180, url: "https://www.grammarly.com/word-counter", tutorial: "https://www.grammarly.com/word-counter", faq: "https://www.grammarly.com/word-counter" },
      { id: "text-grammar-scribbr", name: "Grammar Checker (Scribbr)", icon: "https://placehold.co/80x80/8B5CF6/ffffff?text=SB", iconAlt: "Scribbr Grammar Checker icon", description: "Check and correct grammar, spelling, and punctuation with Scribbr.", score: 4.6, reviews: 145, url: "https://www.scribbr.com/grammar-checker/", tutorial: "https://www.scribbr.com/grammar-checker/", faq: "https://www.scribbr.com/grammar-checker/" },



      ],
      video: [
        // --- ADD ALL Video tools list here ---
        { id: "video-convert-freeconvert", name: "Video Converter (FreeConvert)", icon: "https://placehold.co/80x80/DC2626/ffffff?text=FC", iconAlt: "Video Converter icon", description: "Convert video files to various formats with FreeConvert.", score: 4.5, reviews: 110, url: "https://www.freeconvert.com/video-converter", tutorial: "https://www.freeconvert.com/video-converter", faq: "https://www.freeconvert.com/video-converter" },
        { id: "video-editor-clideo", name: "Online Video Editor (Clideo)", icon: "https://placehold.co/80x80/DC2626/ffffff?text=CL", iconAlt: "Clideo Video Editor icon", description: "Edit videos online with Clideo's easy-to-use tools.", score: 4.3, reviews: 90, url: "https://clideo.com/video-editor", tutorial: "https://clideo.com/video-editor", faq: "https://clideo.com/video-editor" },
        // ... (ADD ALL YOUR VIDEO TOOLS HERE)
        { id: "video-videototext-vizard", name: "Video to Text (Vizard)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=VZ", iconAlt: "Video to text icon", description: "Convert speech in videos to text automatically.", score: 4.6, reviews: 124, url: "https://vizard.ai/tools/video-to-text", tutorial: "https://vizard.ai/tools/video-to-text", faq: "https://vizard.ai/tools/video-to-text" },
        { id: "video-convert-cloudconvert", name: "Video Format Converter (CloudConvert)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=CC", iconAlt: "CloudConvert video converter icon", description: "Convert any video format with CloudConvert.", score: 4.6, reviews: 132, url: "https://cloudconvert.com/video-converter", tutorial: "https://cloudconvert.com/video-converter", faq: "https://cloudconvert.com/video-converter" },
       { id: "video-compressor-freeconvert", name: "Video Compressor (FreeConvert)", icon: "https://placehold.co/80x80/DC2626/ffffff?text=FC", iconAlt: "Video compressor icon", description: "Compress video file size without quality loss.", score: 4.4, reviews: 98, url: "https://www.freeconvert.com/video-compressor", tutorial: "https://www.freeconvert.com/video-compressor", faq: "https://www.freeconvert.com/video-compressor" },
        { id: "video-editor-clideo", name: "Online Video Editor (Clideo)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=CL", iconAlt: "Clideo video editor icon", description: "Edit videos online — cut, merge, resize and more.", score: 4.5, reviews: 145, url: "https://clideo.com/video-editor", tutorial: "https://clideo.com/video-editor", faq: "https://clideo.com/video-editor" },
       { id: "video-generatorai-shorturl", name: "AI Video Generator", icon: "https://placehold.co/80x80/EF4444/ffffff?text=AI", iconAlt: "AI video generator icon", description: "Generate videos automatically using AI tools.", score: 4.3, reviews: 89, url: "https://shorturl.at/OhBeL", tutorial: "https://shorturl.at/OhBeL", faq: "https://shorturl.at/OhBeL" },
       { id: "video-bgremove-cutoutpro", name: "Remove Video Background (Cutout.Pro)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=CO", iconAlt: "Remove video background icon", description: "Easily remove video backgrounds using AI.", score: 4.6, reviews: 116, url: "https://www.cutout.pro/remove-video-background", tutorial: "https://www.cutout.pro/remove-video-background", faq: "https://www.cutout.pro/remove-video-background" },
      { id: "video-texttovideo-pictory", name: "Text to Video Generator (Pictory)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=PC", iconAlt: "Pictory text to video icon", description: "Turn written content into engaging videos.", score: 4.7, reviews: 175, url: "https://pictory.ai/text-to-video-generator", tutorial: "https://pictory.ai/text-to-video-generator", faq: "https://pictory.ai/text-to-video-generator" },
      { id: "video-clipgenerator-invideo", name: "Film Clips Generator (InVideo)", icon: "https://placehold.co/80x80/EF4444/ffffff?text=IV", iconAlt: "InVideo clip generator icon", description: "Create cinematic film clips and videos with AI.", score: 4.6, reviews: 162, url: "https://invideo.ai", tutorial: "https://invideo.ai", faq: "https://invideo.ai" },
      { id: "video-imagetovideo-fliki", name: "Image to Video Generator (Fliki)", icon: "https://placehold.co/80x80/EF4444/ffffff?text=FK", iconAlt: "Fliki image to video icon", description: "Turn images into videos with AI narration and music.", score: 4.8, reviews: 198, url: "https://fliki.ai/features/image-to-video", tutorial: "https://fliki.ai/features/image-to-video", faq: "https://fliki.ai/features/image-to-video" },
      { id: "video-subtitle-addsubtitles", name: "Add Subtitles to Video", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=ST", iconAlt: "Subtitle video icon", description: "Add or auto-generate subtitles to any video file.", score: 4.5, reviews: 109, url: "https://www.veed.io/tools/add-subtitles-to-video", tutorial: "https://www.veed.io/tools/add-subtitles-to-video", faq: "https://www.veed.io/tools/add-subtitles-to-video" },
      { id: "video-mp4compress-ps2pdf", name: "MP4 Video Compressor (PS2PDF)", icon: "https://placehold.co/80x80/EF4444/ffffff?text=P2", iconAlt: "Compress MP4 video icon", description: "Free MP4 video compression tool online.", score: 4.4, reviews: 95, url: "https://www.ps2pdf.com/compress-video", tutorial: "https://www.ps2pdf.com/compress-video", faq: "https://www.ps2pdf.com/compress-video" },
      { id: "video-transcoder-h265", name: "Video Transcoder (H.265)", icon: "https://placehold.co/80x80/EF4444/ffffff?text=H265", iconAlt: "Video transcoder icon", description: "Convert videos to H.265 for better compression.", score: 4.6, reviews: 84, url: "https://convert-video-online.com/", tutorial: "https://convert-video-online.com/", faq: "https://convert-video-online.com/" },
      { id: "video-aivoice-did", name: "AI Video Presenter (D-ID)", icon: "https://placehold.co/80x80/EF4444/ffffff?text=ID", iconAlt: "D-ID video presenter icon", description: "Create AI video avatars from scripts.", score: 4.7, reviews: 132, url: "https://www.d-id.com/", tutorial: "https://www.d-id.com/", faq: "https://www.d-id.com/" },
      { id: "video-maker-animoto", name: "Online Video Maker (Animoto)", icon: "https://placehold.co/80x80/F43F5E/ffffff?text=AN", iconAlt: "Animoto video maker icon", description: "Make marketing and social videos in minutes.", score: 4.5, reviews: 120, url: "https://animoto.com/", tutorial: "https://animoto.com/", faq: "https://animoto.com/" },


      ]
      
    };

    // Curated list of popular tool IDs - YOU MUST CURATE THIS with IDs from toolsData
    const popularToolIds = [
       "image-removebg-removebg", "image-reduce-pi7","pdf-compress-sejda", "image-resize-iloveimg","pdf-pdfeditor-sejda","pdf-resizepdf-sejda","pdf-imagestopdf-pdf24","image-addbgcolor-removebg", "pdf-unlock-ilovepdf","image-enhancer-remini","seo-analyzer-rankmath","pdf-jpgtopdf-sejda", "image-crop-iloveimg","image-circlecrop-imageonline",
        "video-convert-freeconvert", "pdf-mergepdf-sejda","text-wordcount-grammarly", "pdf-deletepages-sejda","video-bgremove-cutoutpro","video-convert-cloudconvert","pdf-pngtopdf-pdf24","image-editor-canva","text-grammar-scribbr","seo-trafficchecker-semrush","pdf-rearrangepdf-pdf24",
        "text-ocrpdf-ilovepdf", "video-editor-clideo", "pdf-jpgtopdf-sejda", "image-compress-iloveimg","pdf-viewpdf-pdf24","text-texttoaudio-narakeet","image-upscale-iloveimg","pdf-pdftoimages-pdf24","text-youtubesummary-eightify",
       "text-pdftotext-sejda",  "pdf-edit-pdf24","pdf-organizepdf-sejda","pdf-createfillablepdf-sejda","pdf-protectpdf-sejda","pdf-unlockpdf-sejda","pdf-watermarkpdf-sejda","pdf-flattenpdf-sejda","pdf-pdftoexcel-sejda","pdf-pdftojpg-sejda","image-blur-iloveimg","image-editorai-deepai","image-editorai-photoroom","pdf-pdftoppt-sejda","pdf-pdftotext-sejda","pdf-pdftoword-sejda","pdf-htmltopdf-sejda","pdf-wordtopdf-sejda","pdf-heictopdf-pdf24","pdf-webptopdf-pdf24","pdf-svgtopdf-pdf24","pdf-docxtopdf-pdf24","pdf-pptxtopdf-pdf24","pdf-xlsxtopdf-pdf24","pdf-scanpdf-ilovepdf","pdf-htmltopdf-ilovepdf","pdf-comparepdf-ilovepdf","pdf-redactpdf-ilovepdf","pdf-signpdf-ilovepdf","video-editor-clideo","video-generatorai-shorturl","pdf-halvepages-pdf24","pdf-croppdf-pdf24","pdf-flattenpdf-pdf24","pdf-pdftortf-pdf24","pdf-pdftoepub-pdf24","pdf-pdftohtml-pdf24","pdf-pdftoods-pdf24","pdf-pdftoodp-pdf24","pdf-pdftoimages-pdf24","pdf-pdftodocx-pdf24","pdf-pdftosvg-pdf24","pdf-pdftopng-pdf24","pdf-pdftojpg-pdf24","pdf-pdftoppt-pdf24",,"pdf-pdftotxt-pdf24","pdf-pdftoword-pdf24","pdf-signpdf-pdf24","pdf-splitpdf-pdf24","pdf-pdfconverter-pdf24","pdf-editpdf-pdf24","pdf-extractimages-pdf24","pdf-extractpages-pdf24","pdf-comparepdfs-pdf24","pdf-createpdfcamera-pdf24","pdf-addpagenumber2-pdf24","pdf-addwatermark-pdf24","pdf-renamepdf-sejda","pdf-croppdf-sejda","pdf-rotatepdf-sejda","pdf-repairpdf-sejda","pdf-addpagenumber-sejda","pdf-pdfeditor-sejda","pdf-changepagesize-pdf24","pdf-removemetadata-pdf24","pdf-editmetadata-pdf24","pdf-optimizeweb-pdf24","pdf-editbookmarks-pdf24","pdf-fillform-pdf24","pdf-repairpdf-pdf24","pdf-signpdf-sejda","pdf-deskew-sejda","pdf-ocr-sejda","pdf-lockpdf-ilovepdf", "image-converttojpg-iloveimg","image-jpgtoconvert-iloveimg","image-editor-iloveimg","image-watermark-iloveimg","image-memegenerator-iloveimg","image-htmltoimage-iloveimg","image-rotate-iloveimg", "seo-trafficchecker-ahrefs","seo-trafficchecker-seranking","seo-googleseochecker-seoreviewtools","seo-checker-uberSuggest","seo-siteaudit-woorank","seo-health-seoptimer","video-videototext-vizard","video-compressor-freeconvert", "video-texttovideo-pictory","video-clipgenerator-invideo","video-imagetovideo-fliki","video-subtitle-addsubtitles", "video-mp4compress-ps2pdf","video-transcoder-h265","video-aivoice-did","video-maker-animoto","text-grammar-languagetool","text-rewriter-quirbot","text-summary-tools4noobs","text-docreader-summarizer",  "text-generator-sassbook","text-readability-webfx","pdf-pdftoword-sejda","pdf-pdftosecurepdf-pdf24","pdf-pdftopdfa-pdf24","pdf-pdftoxlsx-pdf24","pdf-pdftoodt-pdf24",
      
      ];
       
    // =================================================================================
    // == DOM Element References ==
    // =================================================================================
    // Mobile menu elements (using "Global" suffix to avoid conflict with inline script if any)
    // const mobileMenuButton = document.getElementById('mobile-menu-button'); (Handled by inline script in index.html)
    // const mobileMenu = document.getElementById('mobile-menu'); (Handled by inline script in index.html)
    const categoryButtons = document.querySelectorAll('.category-btn');
    const toolsListSection = document.getElementById('tools-list');
    const toolsListContainer = document.getElementById('tools-list-container');
    const toolsListTitle = document.getElementById('tools-list-title');
    const backToHomeBtn = document.getElementById('back-to-home');
    const toolDetailSection = document.getElementById('tool-detail');
    const toolDetailIcon = document.getElementById('tool-detail-icon');
    const toolDetailName = document.getElementById('tool-detail-name');
    const toolDetailDescription = document.getElementById('tool-detail-description');
    const toolDetailScore = document.getElementById('tool-detail-score');
    const toolDetailGo = document.getElementById('tool-detail-go');
    const toolDetailTutorial = document.getElementById('tool-detail-tutorial');
    const toolDetailFaq = document.getElementById('tool-detail-faq');
    const backToToolsBtn = document.getElementById('back-to-tools');
    const homeSection = document.getElementById('home');
    const categoriesSection = document.getElementById('categories');
    const popularSection = document.getElementById('popular'); // This is the main section for "All Available Tools"
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const homeAllToolsGrid = document.getElementById('home-all-tools-grid'); // Container for all tools on home
    const navPopularToolsLink = document.getElementById('nav-popular-tools'); // Desktop "Popular Tools" nav link
    const mobileNavPopularToolsLink = document.getElementById('mobile-nav-popular-tools'); // Mobile "Popular Tools" nav link
    const allToolsMainHeading = document.getElementById('all-tools-main-heading'); // H2 for "All Available Tools"


    // =================================================================================
    // == Core Functions ==
    // =================================================================================

    /**
     * Creates star rating icons based on a score.
     * @param {number} score - The numerical score (e.g., 4.5).
     * @returns {HTMLElement} A div element containing star icons.
     */
    function createStarRating(score) {
      const starContainer = document.createElement('div');
      starContainer.className = 'flex items-center space-x-1 text-yellow-500';
      if (typeof score !== 'number' || score < 0 || score > 5) { // Handle invalid score
        const noScoreText = document.createElement('span');
        noScoreText.className = 'text-sm text-gray-500';
        noScoreText.textContent = 'N/A';
        starContainer.appendChild(noScoreText);
        return starContainer;
      }
      const fullStars = Math.floor(score);
      const halfStar = score - fullStars >= 0.4; // Adjusted threshold for half star
      const emptyStars = Math.max(0, 5 - fullStars - (halfStar ? 1 : 0));

      for (let i = 0; i < fullStars; i++) {
        const star = document.createElement('i');
        star.className = 'fas fa-star';
        starContainer.appendChild(star);
      }
      if (halfStar) {
        const half = document.createElement('i');
        half.className = 'fas fa-star-half-alt';
        starContainer.appendChild(half);
      }
      for (let i = 0; i < emptyStars; i++) {
        const empty = document.createElement('i');
        empty.className = 'far fa-star';
        starContainer.appendChild(empty);
      }
      return starContainer;
    }

    /**
     * Generates HTML for a single tool card.
     * @param {object} tool - The tool data object.
     * @returns {HTMLElement} An article element representing the tool card.
     */
    function generateToolCard(tool) {
        const article = document.createElement('article');
        article.tabIndex = 0; // For accessibility
        article.className = 'tool-card border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-xl focus-within:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus:outline-none flex flex-col items-center cursor-pointer transition-all duration-200 ease-in-out bg-white';
        article.setAttribute('data-tool-id', tool.id);
        article.setAttribute('aria-label', `View details for ${tool.name}`);


        const img = document.createElement('img');
        img.src = tool.icon || 'https://placehold.co/80x80/cccccc/999999?text=No+Icon'; // Fallback icon
        img.alt = tool.iconAlt || tool.name + " icon";
        img.className = 'w-20 h-20 mb-4 object-contain rounded-md';
        img.loading = 'lazy';

        const h3 = document.createElement('h3');
        let titleColorClass = 'text-blue-700'; // Default color     
        if (tool.category === 'image') titleColorClass = 'text-green-700';    
        else if (tool.category === 'seo') titleColorClass = 'text-yellow-700';    
        else if (tool.category === 'text') titleColorClass = 'text-indigo-700';    
        else if (tool.category === 'video') titleColorClass = 'text-red-700';    
        h3.className = `text-md font-semibold text-center mb-2 ${titleColorClass}`;          
        h3.textContent = tool.name;

        const p = document.createElement('p');
        p.className = 'text-center text-gray-600 text-xs mb-4 flex-grow min-h-[48px] line-clamp-3'; // line-clamp for multi-line ellipsis
        p.textContent = tool.description;

        const btn = document.createElement('button');
        let btnBgClass = 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'; // Default button color
        if (tool.category === 'image') btnBgClass = 'bg-green-600 hover:bg-green-700 focus:ring-green-500';
        else if (tool.category === 'seo') btnBgClass = 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500';
        else if (tool.category === 'text') btnBgClass = 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500';
        else if (tool.category === 'video') btnBgClass = 'bg-red-600 hover:bg-red-700 focus:ring-red-500';
        
        btn.className = `tool-card-button ${btnBgClass} text-white w-full py-2 mt-auto rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`;
        btn.innerHTML = '<i class="fas fa-eye mr-1.5"></i>View Tool'; // Changed text for clarity
        btn.setAttribute('aria-label', `View tool: ${tool.name}`);


        // Event listener for the button within the card
        btn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent card click when button is clicked
          showToolDetail(tool.id);
        });

        // Event listener for the entire card (excluding button action)
        article.addEventListener('click', () => {
            showToolDetail(tool.id);
        });

        // Keyboard accessibility for the card
        article.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showToolDetail(tool.id);
          }
        });

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(btn);
        return article;
    }

    /**
     * Loads all tools from toolsData into the main home page grid.
     */
    function loadAllToolsIntoHomePage() {
        if (!homeAllToolsGrid) {
            console.error("Element with ID 'home-all-tools-grid' is not found in the HTML.");
            return;
        }
        homeAllToolsGrid.innerHTML = ''; // Clear any static placeholders
        let allToolsArray = [];
        for (const categoryKey in toolsData) {
            if (toolsData.hasOwnProperty(categoryKey)) {
                toolsData[categoryKey].forEach(tool => {
                    // Add category to each tool object for styling/filtering if needed later
                    allToolsArray.push({...tool, category: categoryKey });
                });
            }
        }

        // Optional: Sort all tools, e.g., alphabetically by name
        allToolsArray.sort((a, b) => a.name.localeCompare(b.name));

        if (allToolsArray.length === 0) {
            homeAllToolsGrid.innerHTML = '<p class="text-center text-gray-600 col-span-full py-8">No tools are currently available. Please check back later.</p>';
        } else {
            allToolsArray.forEach(tool => {
                homeAllToolsGrid.appendChild(generateToolCard(tool));
            });
        }
    }

    /**
     * Displays a list of tools in the dedicated #tools-list section.
     * Used for category views, search results, and popular tools list.
     * @param {Array<object>} toolsToDisplay - Array of tool objects to show.
     * @param {string} title - The title for the tools list section.
     */
    function displayTools(toolsToDisplay, title) {
      if (!toolsListTitle || !toolsListContainer || !homeSection || !categoriesSection || !popularSection || !toolsListSection || !toolDetailSection) {
          console.error("One or more required sections for displayTools are missing from the DOM.");
          return;
      }
      toolsListTitle.textContent = title;
      toolsListContainer.innerHTML = ''; // Clear previous list

      if (toolsToDisplay.length === 0) {
        toolsListContainer.innerHTML = '<p class="text-center text-gray-600 col-span-full py-8">No tools found matching your criteria.</p>';
      } else {
        toolsToDisplay.forEach(tool => {
          // Tool object should ideally already have its category when passed here
          toolsListContainer.appendChild(generateToolCard(tool));
        });
      }

      // Hide home page sections and show the tools list view
      homeSection.classList.add('hidden');
      categoriesSection.classList.add('hidden');
      popularSection.classList.add('hidden'); // This is the "All Tools" grid on the home page
      toolsListSection.classList.remove('hidden');
      toolDetailSection.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'auto' }); // 'auto' for instant jump
    }

    /**
     * Displays the detailed information page for a specific tool.
     * @param {string} toolId - The ID of the tool to display.
     */
    function showToolDetail(toolId) {
      let foundTool = null;
      let toolCategory = null; // To store the category for styling detail buttons

      // Find the tool in toolsData
      for (const categoryKey in toolsData) {
        if (toolsData.hasOwnProperty(categoryKey)) {
            const tool = toolsData[categoryKey].find(t => t.id === toolId);
            if (tool) {
              foundTool = tool;
              toolCategory = categoryKey; // Store the category
              break;
            }
        }
      }

      if (!foundTool) {
        console.error("Tool with ID '" + toolId + "' not found.");
        alert("Sorry, the details for this tool could not be loaded.");
        if (backToHomeBtn) backToHomeBtn.click(); // Attempt to go back home
        return;
      }
      if (!toolDetailIcon || !toolDetailName || !toolDetailDescription || !toolDetailScore || !toolDetailGo || !toolDetailTutorial || !toolDetailFaq || !toolDetailSection) {
          console.error("One or more tool detail elements are missing from the DOM.");
          return;
      }

      toolDetailIcon.src = foundTool.icon || 'https://placehold.co/96x96/cccccc/999999?text=No+Icon';
      toolDetailIcon.alt = foundTool.iconAlt || foundTool.name + " icon";
      toolDetailName.textContent = foundTool.name;
      toolDetailDescription.textContent = foundTool.description;

      // Display score and reviews
      toolDetailScore.innerHTML = ''; // Clear previous
      if (typeof foundTool.score === 'number') {
        const stars = createStarRating(foundTool.score);
        toolDetailScore.appendChild(stars);
        if (typeof foundTool.reviews === 'number') {
            const scoreText = document.createElement('span');
            scoreText.className = 'text-gray-700 font-semibold ml-2 text-sm';
            scoreText.textContent = `${foundTool.score.toFixed(1)} / 5 (${foundTool.reviews} reviews)`;
            toolDetailScore.appendChild(scoreText);
        }
      } else {
        toolDetailScore.innerHTML = '<span class="text-sm text-gray-500">Score not available</span>';
      }

      // Set up links
      toolDetailGo.href = foundTool.url;
      toolDetailTutorial.href = foundTool.tutorial || foundTool.url; // Fallback
      toolDetailFaq.href = foundTool.faq || foundTool.url; // Fallback

      // Style detail page buttons based on tool category
      let detailButtonBaseClass = "px-6 py-2.5 rounded-md font-semibold hover:opacity-90 focus:outline-none focus:ring-2 text-white text-sm flex items-center justify-center";
      let goColor = "bg-blue-600 focus:ring-blue-500";
      let tutorialColor = "bg-green-600 focus:ring-green-500";
      let faqColor = "bg-yellow-600 focus:ring-yellow-500";

      if (toolCategory === 'image') { goColor = "bg-green-600 focus:ring-green-500"; tutorialColor = "bg-blue-600 focus:ring-blue-500"; }
      else if (toolCategory === 'seo') { goColor = "bg-yellow-600 focus:ring-yellow-500"; tutorialColor = "bg-green-600 focus:ring-green-500"; }
      else if (toolCategory === 'text') { goColor = "bg-indigo-600 focus:ring-indigo-500"; tutorialColor = "bg-green-600 focus:ring-green-500"; }
      else if (toolCategory === 'video') { goColor = "bg-red-600 focus:ring-red-500"; tutorialColor = "bg-green-600 focus:ring-green-500"; }
      
      toolDetailGo.className = `${detailButtonBaseClass} ${goColor}`;
      toolDetailTutorial.className = `${detailButtonBaseClass} ${tutorialColor}`;
      toolDetailFaq.className = `${detailButtonBaseClass} ${faqColor}`;

      // Hide other sections and show the tool detail view
      homeSection.classList.add('hidden');
      categoriesSection.classList.add('hidden');
      popularSection.classList.add('hidden');
      toolsListSection.classList.add('hidden');
      toolDetailSection.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'auto' });
    }


    // =================================================================================
    // == Event Listeners Setup ==
    // =================================================================================

    // --- "Popular Tools" Navigation Link Click Handler ---
    const handlePopularToolsLinkClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        let curatedPopularTools = [];
        popularToolIds.forEach(id => {
            let foundTool = null;
            for (const categoryKey in toolsData) {
                if (toolsData.hasOwnProperty(categoryKey)) {
                    const tool = toolsData[categoryKey].find(t => t.id === id);
                    if (tool) {
                        foundTool = {...tool, category: categoryKey}; // Add category info
                        break;
                    }
                }
            }
            if (foundTool) {
                curatedPopularTools.push(foundTool);
            } else {
                console.warn(`Popular tool ID '${id}' not found in toolsData. Please check your 'popularToolIds' list.`);
            }
        });
        displayTools(curatedPopularTools, "Most Popular Tools");
        // Close mobile menu if it's open and was used to click this link
        const mobileMenuNav = document.getElementById('mobile-menu');
        if (mobileMenuNav && !mobileMenuNav.classList.contains('hidden')) {
            mobileMenuNav.classList.add('hidden');
        }
    };
    if (navPopularToolsLink) navPopularToolsLink.addEventListener('click', handlePopularToolsLinkClick);
    if (mobileNavPopularToolsLink) mobileNavPopularToolsLink.addEventListener('click', handlePopularToolsLinkClick);


    // --- Category Buttons Click Handler ---
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const categoryKey = btn.getAttribute('data-category');
        // Map tools to include their category for styling in generateToolCard
        const toolsInCategory = (toolsData[categoryKey] || []).map(tool => ({...tool, category: categoryKey}));
        const categoryName = btn.textContent.trim(); // Gets "PDF Tools", "Image Tools" etc.
        displayTools(toolsInCategory, `${categoryName}`); // Pass the proper title
      });
    });

    // --- Search Form Submit Handler ---
    if (searchForm) {
        searchForm.addEventListener('submit', e => {
          e.preventDefault();
          const query = searchInput.value.trim().toLowerCase();
          if (!query) {
              // Optionally, if query is empty, show all tools or a message
              // For now, just return if query is empty
              return;
          }

          let matchedTools = [];
          for (const categoryKey in toolsData) {
            if (toolsData.hasOwnProperty(categoryKey)) {
                toolsData[categoryKey].forEach(tool => {
                    // Search in tool name and description
                    if (tool.name.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query)) {
                         matchedTools.push({...tool, category: categoryKey }); // Add category for styling
                    }
                });
            }
          }
          // Remove duplicates by ID, in case a tool somehow matches multiple times (though unlikely with current structure)
          matchedTools = matchedTools.filter((tool, index, self) =>
            index === self.findIndex((t) => (t.id === tool.id))
          );
          displayTools(matchedTools, `Search Results for "${searchInput.value.trim()}"`);
        });
    }

    // --- "Back to Home" Button Click Handler (from #tools-list or #tool-detail) ---
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => {
          toolsListSection.classList.add('hidden');
          toolDetailSection.classList.add('hidden'); // Also hide detail if somehow active
          homeSection.classList.remove('hidden');
          categoriesSection.classList.remove('hidden');
          popularSection.classList.remove('hidden'); // This shows the "All Tools" grid again
          searchInput.value = ''; // Clear search
          // loadAllToolsIntoHomePage(); // Re-calling this ensures the home grid is fresh if needed, but might be redundant
                                       // if the DOM content of #home-all-tools-grid isn't being changed by other actions.
                                       // For now, relying on it being initially populated.
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
    }

    // --- "Back to Tools List" Button Click Handler (from #tool-detail page) ---
    if (backToToolsBtn) {
        backToToolsBtn.addEventListener('click', () => {
          toolDetailSection.classList.add('hidden');
          toolsListSection.classList.remove('hidden'); // Show the previous list (category/search/popular)
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
    }

    // --- Smooth Scroll for Header/Mobile Navigation Links (that point to #sections) ---
    // This needs to be robust and handle the special "Popular Tools" link correctly.
    document.querySelectorAll('header a[href^="#"], #mobile-menu a[href^="#"]').forEach(anchor => {
        // Exclude the "Popular Tools" links as they have a custom handler for displaying a list
        if (anchor.id === 'nav-popular-tools' || anchor.id === 'mobile-nav-popular-tools') {
            return; 
        }

        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault(); // Prevent default jump
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                   
                     if (['home', 'categories', 'popular'].includes(targetId)) {
                        toolsListSection.classList.add('hidden');
                        toolDetailSection.classList.add('hidden');
                        homeSection.classList.remove('hidden');
                        categoriesSection.classList.remove('hidden');
                        popularSection.classList.remove('hidden'); // "All Tools" section
                        searchInput.value = ''; // Clear search on home navigation
                    }
                    
                    let scrollToElem = targetElement;
                    if (targetId === 'popular' && allToolsMainHeading) {
                        scrollToElem = allToolsMainHeading;
                    }

                    scrollToElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start' // Align to top
                    });
                }
                // Close mobile menu if it's open and one of its links was clicked
                const mobileMenuNav = document.getElementById('mobile-menu');
                if (mobileMenuNav && !mobileMenuNav.classList.contains('hidden')) {
                    mobileMenuNav.classList.add('hidden');
                }
            }
        });
    });


    // =================================================================================
    // == Initial Page Load Actions ==
    // =================================================================================
    loadAllToolsIntoHomePage(); // Populate the home page with all tools
    console.log("All Tools Portal initialized. server (website) is ready! 🚀");

}); // End of DOMContentLoaded