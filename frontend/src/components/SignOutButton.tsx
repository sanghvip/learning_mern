import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client';
import { userAppContext } from "../context/AppContext";

const SignOutButton = () => {
    const {showToast} = userAppContext();
    const queryClient = useQueryClient();
    const mutation = useMutation(apiClient.logout, {
        onSuccess: async ()=> {
            await queryClient.invalidateQueries("validateToken");
        showToast({message:"Signed Out!", type:"SUCCESS"});
        },
        onError: (error: Error) => {
        showToast({message: error.message, type:"ERROR"});
        }
    });


    const handleClick = () => {
        mutation.mutate();
    }
    return(
        <button onClick={handleClick} className="text-blue-60 px-3 font-bold bg-white hover:bg-gray-100">Sign out</button>
    )
}

export default SignOutButton;