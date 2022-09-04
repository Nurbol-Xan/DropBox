import * as types from "../actions/fileFolderActionTypes";
import  firestore  from "../../config/firebase";
// import { getFirestore } from "firebase/firestore";

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
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
            dispatch(addFolder(folderData));
            alert("Folder created successfully!");
        });
}
