function Backdrop(props: any){
    return <div className="bg-black bg-opacity-50 absolute inset-0 cursor-pointer z-0" onClick={props.onCancel}/>;
}

export default Backdrop;