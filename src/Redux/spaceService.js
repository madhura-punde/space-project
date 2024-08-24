import axios from "axios";

export const fetchSpaceDataService = async () => {
  const response = await axios.get("https://api.spacexdata.com/v3/launches");
  return response;
};
