import * as types from "../actions/fileFolderActionTypes";
import fire from "../../config/firebase"

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload
});

export const createFolder = (data) => (dispatch) => {
    console.log(data);
    // fire
    // .firestore()
    // .collection("folders")
    // .app(data)
    // .then((folder) => {
    //     dispatch(addFolder(folder));
    // })
}