import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar"
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";

const DashboardPage = () => {
    const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/");
        }
    })

    return (
        <>
        {
            isCreateFolderModalOpen && (
                <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
            )
        }
            <Navbar />
            <SubBar setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
            <HomeComponent />
        </>
    )
}

export default DashboardPage;