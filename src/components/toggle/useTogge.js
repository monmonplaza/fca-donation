import { setIsMode, setMode } from "../../store/StoreAction";
import { devApiUrl } from "../helpers/general-functions";

const useToggle = (dispatch) => {
  const handleChange = (e) => {
    let isToggle = e.target.checked;
    isToggle ? handleTestMode() : handleLiveMode();
  };

  const handleLiveMode = () => {
    dispatch(setIsMode(true));
    fetch(devApiUrl + "/mode/update-mode.php", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode: "live", appId: 1 }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          if (!result.status) {
            return;
          }
          if (result.status) {
            dispatch(setIsMode(false));
            dispatch(setMode("live"));
            // store.isSave ? dispatch(setSave(false)) : dispatch(setSave(true));
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  };

  const handleTestMode = () => {
    dispatch(setIsMode(true));
    fetch(devApiUrl + "/mode/update-mode.php", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mode: "test", appId: 1 }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          if (!result.status) {
            return;
          }
          if (result.status) {
            dispatch(setIsMode(false));
            dispatch(setMode("test"));
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  };

  return { handleChange };
};
export default useToggle;
