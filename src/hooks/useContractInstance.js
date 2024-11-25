import { useMemo } from "react";
import useSignerOrProvider from "./useSignerOrProvider";
import { Contract } from "ethers";
import ABI from "../ABI/todo.json";


const useContractInstance = (withSigner = false) => {
    const {signer, readOnlyProvider} = useSignerOrProvider();

    return useMemo(() => {
        if(withSigner) {
            if(!signer) return null;

            return new Contract(
                import.meta.env.VITE_TODO_CONTRACT_ADDRESS,
                ABI,
                signer
            );
        }

        return new Contract(
            import.meta.env.VITE_TODO_CONTRACT_ADDRESS,
            ABI,
            readOnlyProvider
        );
    }, [signer, readOnlyProvider, withSigner])
}

export default useContractInstance;