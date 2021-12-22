import React from "react";
import { StoreContext } from "../../store/StoreContext";
import useToggle from "./useTogge";

const Toggle = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { handleChange } = useToggle(dispatch);

  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          id="toggle"
          checked={
            store.mode === "live" ? false : store.mode === "test" ? true : false
          }
          onChange={handleChange}
        />
        <label htmlFor="toggle" className="slider"></label>
        {store.mode && (
          <span className="mode">
            {store.isMode ? "loading..." : `${store.mode} mode`}
            {/* {store.mode} mode */}
          </span>
        )}
      </div>
    </>
  );
};

export default Toggle;
