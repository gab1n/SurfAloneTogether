import axios from "axios";
import * as helper from "./serviceHelpers";

const getCrowdDataBySpotId = id => {
  const config = {
    method: "GET",
    url: helper.API_HOST_PREFIX + "/api/crowds/" + id,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};

const submitCrowdLevel = payload => {
  const config = {
    method: "POST",
    url: helper.API_HOST_PREFIX + "/api/crowds/",
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};

export { getCrowdDataBySpotId, submitCrowdLevel };
