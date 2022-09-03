import ShowItems from "../ShowItems/ShowItems";

const HomeComponent = () => {
    const folders = ["New Folder", "new folder 2"];
    const files = ["New file", "second file"];

    return (
        <div className="col-md-12 w-100">
            <ShowItems title={"Created Folders"} items={folders} />
            <ShowItems title={"Create Files"} items={files} />
        </div>
    )
}

export default HomeComponent;