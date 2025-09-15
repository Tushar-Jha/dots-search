import { FileSpreadsheet, FileText, Folder, ImageIcon, List, MessageCircleMore, Presentation, Video } from 'lucide-react';

const FileTypeIconMap = {
    docx: <FileText />,
    image: <ImageIcon />,
    pptx: <Presentation />,
    xlsx: <FileSpreadsheet />,
    video: <Video />,
    folder: <Folder />,
    list: <List />,
    chat: <MessageCircleMore />
}

export default FileTypeIconMap;