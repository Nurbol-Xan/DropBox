import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import { useEffect, useState } from "react";

const FileComponent = () => {
    const { fileId } = useParams();
    const [fileData, setFileData] = useState("");
    const [prevFileData, setPrevFileData] = useState("");
    const navigate = useNavigate();

    const { currentFile } = useSelector(
        (state) => ({
            currentFile: state.filefolders.userFiles.find(
                (file) => file.docId === fileId
            ),
        }),
        shallowEqual
    );

    useEffect(() => {
        if(currentFile){
            setFileData(currentFile.data.data);
            setPrevFileData(currentFile.data.data);
        }
    }, [currentFile, currentFile.data.data]);

    return (
        <div>
            {
                fileData  ? (
                    <>
                        <Header fileName={currentFile?.data.name} />
                        <CodeEditor fileName={currentFile?.data.name} />
                    </>
                ) : (
                    <>
                       <h1 className="display-1 my-5 text-center">Uploaded files preview coming soon</h1> 
                       <button className="btn btn-primary" onClick={() => navigate(-1)}>
                         Go Back
                       </button>
                    </>
                )
            }
            
        </div>
    )
};

export default FileComponent;