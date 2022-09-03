import * as types from "../actions/fileFolderActionTypes";
import fire from "../../config/firebase";
// import { getFirestore } from "firebase/firestore";

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

export const createFolder = (data) => (dispatch) => {
    fire
        .firestore()
        .collection("folders")
        .app(data)
        .then((folder) => {
            dispatch(addFolder(folder));
        });
}
