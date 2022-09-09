import { useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import Header from "./Header";
import CodeEditor from "./CodeEditor";
import { useEffect, useState } from "react";
// import { downloadFile } from "../../../redux/actionCreators/fileFolderActionCreator";
import firebase from '../../../config/firebase'
import jsDownloader from 'js-file-download'

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
    }, [currentFile, currentFile?.data.data]);

    const downloadFile = async () => {
        const url = await firebase.storage().ref(`files/${currentFile.data.userId}/${currentFile.data.name}`).getDownloadURL();
        fetch(url,{cors:'no-cors'}).then((data) => {
            // console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        console.log(url);
        // jsDownloader(currentFile.data.url, url, currentFile.data.name);
        const element = document.createElement("a");
        element.setAttribute("href", currentFile.data.url)
        element.setAttribute("download", currentFile.data.url);
        element.setAttribute("target", "_blank");
        element.style.display = "none";
        document.body.appendChild(element);
        // element.click();
        document.body.removeChild(element);
    }

    return (
        <div>
            {
                fileData  ? (
                    <>
                        <Header fileName={currentFile?.data.name} />
                        <CodeEditor fileName={currentFile?.data.name} />
                    </>
                ) : (
                    <div className="position-fixed left-0 top-0 w-100 h-100 bg-black text-white">
                        <div className="d-flex py-4 mt-4 px-5 justify-content-between align-items-center">
                            <p title={currentFile?.data.name} className="my-0">
                                {currentFile?.data.name.length > 40
                                    ? currentFile?.data.name.slice(0, 40) + "... ." + 
                                    currentFile?.data.extension : currentFile?.data.name }
                            </p>
                            <div className="d-flex align-items-center text-white me-5">
                                    <button className="btn btn-sm btn-outline-light mr-2"
                                        onClick={() => navigate(-1)}>
                                            {/* <i className="fas fa-arrow-left"> */}
                                                Go Back
                                            {/* </i> */}
                                    </button>
                                    <button className="btn btn-sm btn-primary" onClick={() => downloadFile()}>Download</button> 
                            </div>
                        </div>
                        <div className="w-100 mt-4" style={{ height: "85%"}}>
                                 {currentFile?.data.extension.includes("png") ||
                                    currentFile?.data.extension.includes("jpg") ||
                                    currentFile?.data.extension.includes("jpeg") ||
                                    currentFile?.data.extension.includes("gif") ? (
                                        <img src={currentFile?.data.url}
                                            alt={currentFile?.data.name}
                                            className="w-100 h-100 img-fluid" />
                                    ) : (
                                        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                            <p className="text-center">
                                                File Type not supperted. Please download the file to view it.
                                            </p>
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                )
            }
            
        </div>
    )
};

export default FileComponent;