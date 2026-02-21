import { setIsLoading, setModalOpen } from "@/store/UI/uiSlices";
import { useAppDispatch, useAppSelector } from "./useStore"

export const useUiStore = () => {
    const dispatch = useAppDispatch();
    
    const { isLoading, modalOpen } = useAppSelector(state => state.ui);

    const _setIsLoading = (value: boolean) => {
        dispatch(setIsLoading(value));
    };
    
    const _setModalOpen = (value: boolean) => {
        dispatch(setModalOpen(value));
    };

    return{
        // Methods
        _setIsLoading,
        _setModalOpen,
        
        // Properties
        isLoading,
        modalOpen,
    }
}