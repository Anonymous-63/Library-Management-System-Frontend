import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector

export function useActions(actions) {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch])
}