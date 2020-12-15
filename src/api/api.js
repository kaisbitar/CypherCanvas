import axios from "axios";

export function fetchSearchResults(appApi, searchType, specialExpressions) {
  return axios
    .get(appApi + `/api/search/` + searchType + "/" + specialExpressions)
    .then(response => {
      return response.data;
    });
}
