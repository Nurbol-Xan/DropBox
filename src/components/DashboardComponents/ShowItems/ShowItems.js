import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../../../CSS/ShowItems.css";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator"

const ShowItems = ({title, items, type}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDblClick = (itmeId) => {
        if(type === "folder"){
            dispatch(changeFolder(itmeId));
            navigate(`/dashboard/folder/${itmeId}`);
        }else{
            navigate(`/dashboard/file/${itmeId}`);
        }
    }

    return (
        <div className="w-100">
            <h4 className="text-center border-bottom py-2">{title}</h4>
            <div className="row gap-2 p-4  flex-wrap">
                {items.map((item, index) => {
                    return <p 
                            key={index * 55}
                            className="col-md-2 py-3 d-flex flex-column text-center border"
                            onDoubleClick = {() => handleDblClick(item.docId)} >
                        {
                            type === "folder" ? (
                                <FontAwesomeIcon icon={faFolder} size="4x" className="md-3"/>
                            ) : (
                                <FontAwesomeIcon icon={faFileAlt} size="4x" className="md-3"/>
                            )
                        }
                        {item.data.name}
                    </p>
                })}
            </div>
        </div>
    )
}

export default ShowItems;
