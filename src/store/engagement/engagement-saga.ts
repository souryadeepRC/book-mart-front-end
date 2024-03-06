import { put, takeEvery } from "redux-saga/effects";
// api
// constants
import {
  FETCH_COMMUNITY_POSTS,
  FETCH_COMMUNITY_POSTS_FAILURE,
  FETCH_COMMUNITY_POSTS_REQUEST,
  FETCH_COMMUNITY_POSTS_SUCCESS,
} from "./engagement-constants";
function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const getPostMembers = (length: number) => {
  let members = [];
  for (let index = 1; index <= length; index++) {
    members.push({
      _id: `${index}`,
      username: generateRandomString(),
      stageName: generateRandomString(),
    });
  }
  return members;
};
function formatNumber(number:number) {
  if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
  } else {
      return number.toString();
  }
}
function* fetchCommunityPostsSaga(): any {
  yield put({ type: FETCH_COMMUNITY_POSTS_REQUEST });
  try {
    const response = {
      data: [
        {
          _id: "123",
          title: "Hogwarts warrior",
          author: "J.K.Rowling",
          description: "Let's magic the world",
          followersCount:formatNumber(547247),
          postsCount:formatNumber(94747),
          topActiveMembers: getPostMembers(5),
          isMoreFollowers: true
        },
        {
          _id: "124",
          title: "Feluda Gang",
          author: "Sounak Roy",
          description: "Detective hunters",
          followersCount:formatNumber(1254),
          postsCount:formatNumber(94747),
          topActiveMembers: getPostMembers(5),
          isMoreFollowers: true
        },
        {
          _id: "124",
          title: "Avengers",
          author: "Sounak Roy",
          description: "Detective hunters",
          followersCount:formatNumber(12547),
          postsCount:formatNumber(94747),
          topActiveMembers: getPostMembers(5),
          isMoreFollowers: true
        },
        {
          _id: "124",
          title: "Game of Throne Gang",
          author: "Sounak Roy",
          description: "Detective hunters",
          followersCount:formatNumber(3),
          postsCount:formatNumber(94747),
          topActiveMembers: getPostMembers(3),
          isMoreFollowers: false
        },
      ],
    };
    yield put({
      type: FETCH_COMMUNITY_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: FETCH_COMMUNITY_POSTS_FAILURE,
      payload:
        error?.response?.data?.error_description ||
        "Sorry! network issue detected",
    });
  }
}

export function* engagementSaga() {
  yield takeEvery(FETCH_COMMUNITY_POSTS, fetchCommunityPostsSaga);
}
