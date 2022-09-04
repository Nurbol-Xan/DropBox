import * as types from "../actions/fileFolderActionTypes";
import  firestore  from "../../config/firebase";
// import { getFirestore } from "firebase/firestore";

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

const addFolders = (payload) => ({
    type: types.ADD_FOLDERS,
    payload,
});

const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload,
});

export const createFolder = (data) => (dispatch) => {
    // console.log(data);
    // console.log(firestore.firestore().collection("folder").app(data).then((folder) => {dispatch.addFolder(folder)}));
    firestore
        .firestore()
        .collection("folders")
        .add(data)
        .then(async (folder) => {
            const folderData = await (await folder.get()).data();
            const folderId = folder.id
            dispatch(addFolder({ data: folderData, docId: folderId}));
            alert("Folder created successfully!");
        });
}


export const getFolders = (userId) => (dispatch) => {
    dispatch(setLoading(true));
    firestore
    .firestore()
    .collection("folders")
    .where("userId", "==", userId)
    .get()
    .then(async (folders) => {
        const foldersData = await folders.docs.map((folder) => ({
            data: folder.data(),
            docId: folder.id,
        }));
        dispatch(addFolders(foldersData));
        dispatch(setLoading(false));
    })
}


