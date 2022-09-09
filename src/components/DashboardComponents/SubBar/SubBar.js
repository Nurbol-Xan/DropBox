import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import "../../../CSS/SubBar.css";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator";
import { useEffect } from "react";

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

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "canvas.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }, []);

    return (
        <>
        <div class="cursor-1"></div>
        <div class="cursor-2"></div>
        <div id="menu-bars" class="fas fa-bars"></div>
        <header>

            <a href="#" class="logo"> <span>Nurbol</span> Xaydaraliyev </a>
        
            <nav class="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#experience">experience</a>
                <a href="#portfolio">portfolio</a>
                <a href="#contact">contact</a>
            </nav>
        
            <div class="follow">
                <a href="https://t.me/nurbol_xan" class="fab fa-telegram"></a>
                <a href="https://github.com/Nurbol-Xan" class="fab fa-github"></a>
                <a href="https://www.linkedin.com/in/nurbol-xaydaraliyev-39b199242/" class="fab fa-linkedin"></a>
            </div>
        
        </header>
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
            <script crossorigin src="canvas.js"></script>
        </>
    )
}

export default SubBar;