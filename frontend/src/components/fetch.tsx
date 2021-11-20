import {userInfo} from './check_auth';

export const FetchAll = async(url:string, method: string, setIsLoading: any, setLoadedInfo: any) => {
    
    const fetchResponse = (response: any) => {
        return(
            response.json()
        )
    };

    const fetchData = (data:any) => {
        
        const arr = [];

        for(const key in data){
            const info = {
                id: key,
                ...data[key]        
            };

            arr.push(info);
        };

        return(
            setLoadedInfo(arr),
            setIsLoading(false)
        );
    };
    
    await fetch(
        url,
        {
            method: method,
            headers: {
                "Authorization": userInfo.authorization,
                "Email": userInfo.email
            }
        }
    )
    .then(response => fetchResponse(response))
    .then(data => fetchData(data));
};

export const FetchById = (url:string, method:string, setIsLoading:any, setLoadedInfo:any) => {

    const fetchResponse = (response: any) => {
        return(
            response.json()
        )
    };

    const fetchData = (data: any) => {

        const arr = [];

        for(const key in data){
            const info = {
                id: key,
                ...data[key]        
            };

            arr.push(info);
        };

        return(
            setLoadedInfo(arr),
            setIsLoading(false)
        );
    };

    fetch(
        url,
        {
            method: method,
            headers: {
                "Authorization": userInfo.authorization,
                "Email": userInfo.email
            }
        }
    )
    .then(response => fetchResponse(response))
    .then(data => fetchData(data));
}
