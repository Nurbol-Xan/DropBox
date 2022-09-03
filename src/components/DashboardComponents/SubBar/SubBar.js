import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import "../../../CSS/SubBar.css";

const SubBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-white px-4 mt-2">
                <p className="small">Root</p>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark">
                        <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload file</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faFileCirclePlus} />&nbsp; Create file</button>
                    </li>
                    <li className="nav-item mx-2">
                        <button className="btn btn-outline-dark"><FontAwesomeIcon icon={faFolderPlus} />&nbsp; Create folder</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SubBar;