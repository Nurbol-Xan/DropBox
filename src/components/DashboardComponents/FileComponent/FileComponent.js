import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Header from "./Header";
import CodeEditor from "./CodeEditor";

const FileComponent = () => {
    const { fileId } = useParams();

    const { currentFile } = useSelector(
        (state) => ({
            currentFile: state.filefolders.userFiles.find(
                (file) => file.docId === fileId
            ),
        }),
        shallowEqual
    );

    return (
        <div>
            <Header fileName={currentFile?.data.name} />
            <CodeEditor fileName={currentFile?.data.name} />
        </div>
    )
};

export default FileComponent;