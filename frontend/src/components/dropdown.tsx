const Dropdown = (props:string|unknown, dropdownChoices:string[], setInfo: any, setDropdownIsOpen:any) => {
    
    const mappedDropdownItems = dropdownChoices.map((item: string) => {
        
        const changePosition = (newInfo:string) => {
            return(
                setDropdownIsOpen(false),
                setInfo(newInfo)
            )
        }

        if(props !== item){
            return (
                <button 
                    type="button"
                    className="flex pl-3 rounded bg-blue-50"
                    onClick={() => changePosition(item)}
                >
                    {item}
                </button>
            )
        }
    })

  return mappedDropdownItems;
};

export default Dropdown;

