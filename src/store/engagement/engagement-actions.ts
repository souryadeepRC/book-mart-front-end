// types
import { ReducerActionPayloadType } from "src/store/reducer-types";
// constants
import { FETCH_COMMUNITIES } from "./engagement-constants";

export const fetchCommunities = (): ReducerActionPayloadType => {
  return {
    type: FETCH_COMMUNITIES,
  };
};
