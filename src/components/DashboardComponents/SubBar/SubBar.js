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
        let menu = document.querySelector('#menu-bars');
        let header = document.querySelector('header');

        menu.onclick = () =>{
            menu.classList.toggle('fa-times');
            header.classList.toggle('active');
        }

        window.onscroll = () =>{
            menu.classList.remove('fa-times');
            header.classList.remove('active');
        }

        let cursor1 = document.querySelector('.cursor-1');
        let cursor2 = document.querySelector('.cursor-2');

        window.onmousemove = (e) =>{
            cursor1.style.top = e.pageY + 'px';
            cursor1.style.left = e.pageX + 'px';
            cursor2.style.top = e.pageY + 'px';
            cursor2.style.left = e.pageX + 'px';
        }

        document.querySelectorAll('a').forEach(links =>{

            links.onmouseenter = () =>{
                cursor1.classList.add('active');
                cursor2.classList.add('active');
            }

            links.onmouseleave = () =>{
                cursor1.classList.remove('active');
                cursor2.classList.remove('active');
            }

        });
    }, []);

    return (
        <>
        <div class="cursor-1"></div>
        <div class="cursor-2"></div>
        <div id="menu-bars" class="fas fa-bars"></div>
        <header>
              <nav className="px-4 mt-2 dashboard">
                <nav aria-label="breadcrumb" className="ms-5">
                    <ol className="breadcrumb d-flex align-items-center">
                        { 
                            currentFolder !== "root" ? (
                                <>
                                    <button onClick={() => handleNavigate("/dashboard", "root")}
                                    className="breadcrumb-item btn btn-link text-decoration-none fs-3">
                                        Root
                                    </button>
                                    {
                                        currentFolderData?.data.path.map((folder, index ) => (
                                            <button key={index} className="breadcrumb-item btn btn-link text-decoration-none fs-3"
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
                                        <li className="breadcrumb-item active fs-4">
                                            {currentFolderData?.data.name}
                                        </li>
                                </>
                            ) : (
                                <>
                                    <li className="breadcrumb-item   text-decoration-none fs-3">
                                        Root
                                    </li>
                                </>
                            )
                        }
                    </ol>
                </nav>
                
            </nav>
            <nav class="navbar">
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
        
        
          

        </header>
            
            <script crossorigin src="canvas.js"></script>
        </>
    )
}

export default SubBar;