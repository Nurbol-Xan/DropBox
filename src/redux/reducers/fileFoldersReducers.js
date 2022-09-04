import * as types from "../actions/fileFolderActionTypes";

const initialState = {
    isLoading: true,
    currentFolder: "root",
    userFolders: [],
    userFiles: [],
    adminFolders: [],
    adminFiles: [],
}

const fileFoldersReducer = (state = initialState, action) => {
    switch (action.type){
        case types.CREATE_FOLDER:
            return {
                ...state,
                userFolders: [...state.userFolders, action.payload],
            }
        case types.ADD_FOLDERS:
            return {
                ...state,
                userFolders: action.payload,
            }
        case types.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case types.CHANGE_FOLDER:
            return {
                ...state,
                currentFolder: action.payload,
            }
        case types.ADD_FILES:
            return {
                ...state,
                userFiles: action.payload,
            }
        case types.CREATE_FILE:
            return {
                ...state,
                userFiles: [...state.userFiles, action.payload],
            }
        default:
            return state;
    }
};

export default fileFoldersReducer;