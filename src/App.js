import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SpaceCardComponent from "./Components/SpaceCardComponent";

function App() {
  const [initialData, loadInitialData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { success_data: spaceData } = useSelector((state) => state.space);

  useEffect(() => {
    if (!initialData) {
      dispatch({ type: "SPACE_DATA_REQUESTED" });
      loadInitialData(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log("In App Component", spaceData, spaceData.length);
  // }, [spaceData]);

  const hello =
    spaceData.length &&
    spaceData.map((item, index) => {
      return (
        <SpaceCardComponent
          key={index}
          mission_name={item.mission_name ? item.mission_name : ""}
          launch_year={item.launch_year ? item.launch_year : ""}
          launch_date_local={
            item.launch_date_local ? item.launch_date_local : ""
          }
          details={item.details ? item.details : ""}
          links={item.links ? item.links : ""}
          launch_site={item.launch_site ? item.launch_site : ""}
        />
      );
    });

  return (
    <div>
      {isLoading && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">{hello}</div>
      </div>
    </div>
  );
}

export default App;
