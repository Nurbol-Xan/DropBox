import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar"
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import { getFiles, getFolders } from "../../redux/actionCreators/fileFolderActionCreator";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent";
import CreateFile from "../../components/DashboardComponents/CreateFile/CreateFile";
import FileComponent from "../../components/DashboardComponents/FileComponent/FileComponent";

const DashboardPage = () => {
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
    const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);
    const [ showSubBar, setShowSubBar ] = useState(true);
    const { pathname } = useLocation();

    const {isLoggedIn, isLoading, userId} = useSelector((state) => ({
        isLoggedIn: state.auth.isAuthenticated,
        isLoading: state.filefolders.isLoading,
        userId: state.auth.user.uid,
    }), shallowEqual);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/");
        }
    },[navigate,isLoggedIn]);

    useEffect(() => {
        if(isLoading && userId){
            dispatch(getFolders(userId));
            dispatch(getFiles(userId));
        }
    }, [isLoading, userId, dispatch ]);

    useEffect(() => {
        if(pathname.includes("/file/")){
            console.log("pathname", pathname);
            setShowSubBar(false);
        }
    }, [pathname])

    return (
        <>
        {
            isCreateFolderModalOpen && (
                <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
            )
        }
        {
            isCreateFileModalOpen && (
                <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
            )
        }
            <Navbar />
            {showSubBar && (
                <SubBar 
                    setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
                    setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
            )}
            <Routes>
                <Route path="" element={<HomeComponent />} />
                <Route path="folder/:folderId" element={< FolderComponent />} />
                <Route path="file/:fileId" element={< FileComponent />} />
            </Routes>
        </>
    )
}

export default DashboardPage;