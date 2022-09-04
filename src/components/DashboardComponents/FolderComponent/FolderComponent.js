import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ShowItems from "../ShowItems/ShowItems";

const FolderComponent = () => {
    const { folderId } = useParams();

    const { currentFolderData, childFolders, childFiles } = useSelector((state) => ({
        currentFolderData: state.filefolders.userFolders.find(
            (folder) => folder.docId === folderId
        )?.data,
        childFolders: state.filefolders.userFolders.filter(
            (folder) => folder.data.parent === folderId
        ),
        childFiles: state.filefolders.userFiles.filter(
            (file) => file.data.parent === folderId
        ),
    }), shallowEqual);

    return (
        <>
            {
                childFolders.length > 0 ? (
                    <>
                        <ShowItems title={"Created Folders"} type={"folder"} items={childFolders} />
                        {childFiles.length > 0 && (
                            <ShowItems title={"Created Files"} type={"file"} items={
                                childFiles.filter((file) => file.data.url === null)
                            } />
                        )}
                    </>
                    ) : (
                    <p className="text-center my-5">Empty Folder</p>
                )
            }
        </>
    )
}

export default FolderComponent;