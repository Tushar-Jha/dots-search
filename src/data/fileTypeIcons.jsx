import { FileSpreadsheet, FileText, Folder, ImageIcon, List, Presentation, Video } from 'lucide-react';

const FileTypeIconMap = {
    docx: <FileText />,
    image: <ImageIcon />,
    pptx: <Presentation />,
    xlsx: <FileSpreadsheet />,
    video: <Video />,
    folder: <Folder />,
    list: <List />
}

export default FileTypeIconMap;