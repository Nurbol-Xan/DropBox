import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { createFile } from "../../../redux/actionCreators/fileFolderActionCreator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const CreateFile = ({setIsCreateFileModalOpen}) => {
    const [ filename, setFilename ] = useState("");
    const [ success, setSuccess] = useState(false);

    const { userFiles, user, currentFolder, currentFolderData } = useSelector((state) => ({
        userFiles: state.filefolders.userFiles,
        user: state.auth.user,
        currentFolder: state.filefolders.currentFolder,
        currentFolderData: state.filefolders.userFolders
        .find(folder => 
            folder.docId === state.filefolders.currentFolder
        ), 
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        if(success){
            setFilename("");
            setSuccess(false);
            setIsCreateFileModalOpen(false);
        }
    })

    const checkFileAlreadyPresent = (name, ext) => {
        if(!ext){
            name = name + ".txt";
        }
            const filePresent = userFiles.filter((folder) => folder.data.parent === currentFolder)
            .find((file) => file.data.name === name);
            if(filePresent) return true;
            else return false;
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(filename){
            if(filename.length > 3){
                let extension = false;
                if(filename.split(".").length > 1){
                    extension = true;
                }
                if(!checkFileAlreadyPresent(filename, extension)){
                    const data = {
                        createdAt: new Date(),
                        createdBy: user.displayName,
                        lastAccessed: null,
                        name: extension ? filename : `${filename}.txt`,
                        parent: currentFolder,
                        path: currentFolder === "root" ? []: [...currentFolderData?.data.path, currentFolder],
                        updateAt: new Date(),
                        userId: user.uid,
                        extension: extension ? filename.split(".")[1] : "txt",
                        data: "",
                        url: null,
                    };
                    dispatch(createFile(data, setSuccess));
                    // console.log("data", data);
                }else alert("File already present!");
            }else{
                alert("File name must be at least 3 characters!");
            }
        }else{
            alert("File name can't be empty! ");
        }
    }

    return (
        <div className="col-md-12 position-fixed top-0 left-0 w-100 h-100" style={{background: "rgba(0,0,0,0.4)", zIndex: 9999 }}>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4 mt-5 bg-white rounded p-4">
                    <div className="d-flex justify-content-between">
                        <h4>Create File</h4>
                        <button className="btn" onClick={() => setIsCreateFileModalOpen(false)}>
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-block"
                                size="sm" />
                        </button>
                    </div>
                    <hr />
                    <div className="d-flex flex-column align-items-center">
                        <form className="mt-3 w-100" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text"
                                className="form-control"
                                id="filename"
                                placeholder="File Name e,g. file.txt, index.php, index.ts, index.js"
                                value={filename}
                                onChange={(e) => setFilename(e.target.value)} />
                            </div>
                            <button type='submit' className="btn btn-primary mt-5 form-control">
                                Create File
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateFile;