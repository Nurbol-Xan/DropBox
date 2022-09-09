import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import "../../../CSS/SubBar.css";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator";

const SubBar = ({ setIsCreateFolderModalOpen, setIsCreateFileModalOpen, setIsFileUploadModalOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentFolder, currentFolderData, userFolders } = useSelector((state) => ({
        currentFolder: state.filefolders.currentFolder,
        currentFolderData: state.filefolders.userFolders.find(
            (folder) => folder.docId === state.filefolders.currentFolder
        ),
        userFolders: state.filefolders.userFolders,
    }), shallowEqual);

    const handleNavigate = (link, id) => {
        navigate(link);
        dispatch(changeFolder(id));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-white px-4 mt-2">
                <nav aria-label="breadcrumb" className="ms-5">
                    <ol className="breadcrumb d-flex align-items-center">
                        {
                            currentFolder !== "root" ? (
                                <>
                                    <button onClick={() => handleNavigate("/dashboard", "root")}
                                    className="breadcrumb-item btn btn-link text-decoration-none">
                                        Root
                                    </button>
                                    {
                                        currentFolderData?.data.path.map((folder, index ) => (
                                            <button key={index} className="breadcrumb-item btn btn-link"
                                            onClick={() => 
                                                handleNavigate(
                                                    `/dashboard/folder/${
                                                        userFolders.find((fldr) => folder === fldr.docId).docId
                                                    }`,
                                                    userFolders.find((fldr) => folder === fldr.docId).docId
                                                )
                                            }>
                                                {userFolders.find((fldr) => folder === fldr.docId).data.name}
                                            </button>
                                        ))}
                                        <li className="breadcrumb-item active">
                                            {currentFolderData?.data.name}
                                        </li>
                                </>
                            ) : (
                                <>
                                    <li className="breadcrumb-item active pt-4">
                                        Root
                                    </li>
                                </>
                            )
                        }
                    </ol>
                </nav>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark" onClick={() => setIsFileUploadModalOpen(true)}>
                        <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload file</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark" onClick={() => setIsCreateFileModalOpen(true)}><FontAwesomeIcon icon={faFileCirclePlus} />&nbsp; Create file</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark" onClick={() => setIsCreateFolderModalOpen(true)}><FontAwesomeIcon icon={faFolderPlus} />&nbsp; Create folder</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SubBar;