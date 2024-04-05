import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchingStated());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      });
    //

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
