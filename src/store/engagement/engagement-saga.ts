import { put, takeEvery } from "redux-saga/effects";
// api
// constants
import {
  getChatMessages,
  getChatRooms,
  postSendChatMessage,
} from "src/api/engagement-api";
import {
  FETCH_CHAT_ROOMS,
  FETCH_CHAT_ROOMS_FAILURE,
  FETCH_CHAT_ROOMS_REQUEST,
  FETCH_CHAT_ROOMS_SUCCESS,
  FETCH_COMMUNITIES,
  FETCH_COMMUNITIES_FAILURE,
  FETCH_COMMUNITIES_REQUEST,
  FETCH_COMMUNITIES_SUCCESS,
  FETCH_MESSAGE,
  FETCH_MESSAGE_FAILURE,
  FETCH_MESSAGE_REQUEST,
  FETCH_MESSAGE_SUCCESS,
  SEND_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./engagement-constants";
function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
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
function formatNumber(number: number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
}
const getEngagementData = () => {
  let data = [];
  for (let index = 0; index < 5; index++) {
    data.push({
      _id: `123-${index}`,
      title:
        "Hogwarts warrior Hogwarts warrior Hogwarts warrior Hogwarts warrior Hogwarts warrior",
      author:
        "J.K.RowlingJ.K.RowlingJ.K.RowlingJ.K.RowlingJ.K.RowlingJ.K.RowlingJ.K.RowlingJ.K.Rowling",
      description:
        "Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world Let's magic the world ",
      followersCount: formatNumber(547247),
      postsCount: formatNumber(94747),
      topActiveMembers: getPostMembers(5),
      isMoreFollowers: true,
    });
    data.push({
      _id: `124-${index}`,
      title: "Feluda Gang",
      author: "Sounak Roy",
      description: "Detective hunters",
      followersCount: formatNumber(1254),
      postsCount: formatNumber(94747),
      topActiveMembers: getPostMembers(5),
      isMoreFollowers: true,
    });
    data.push({
      _id: `125-${index}`,
      title: "Avengers",
      author: "Sounak Roy",
      description: "Detective hunters",
      followersCount: formatNumber(12547),
      postsCount: formatNumber(94747),
      topActiveMembers: getPostMembers(5),
      isMoreFollowers: true,
    });
    data.push({
      _id: `126-${index}`,
      title: "Game of Throne Gang",
      author: "Sounak Roy",
      description: "Detective hunters",
      followersCount: formatNumber(3),
      postsCount: formatNumber(94747),
      topActiveMembers: getPostMembers(3),
      isMoreFollowers: false,
    });
  }
  return data;
};
function* fetchCommunityPostsSaga(): any {
  yield put({ type: FETCH_COMMUNITIES_REQUEST });
  try {
    const response = {
      data: getEngagementData(),
    };
    yield put({
      type: FETCH_COMMUNITIES_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: FETCH_COMMUNITIES_FAILURE,
      payload:
        error?.response?.data?.error_description ||
        "Sorry! network issue detected",
    });
  }
}
function* fetchChatRoomsSaga({payload}:any): any {
  yield put({ type: FETCH_CHAT_ROOMS_REQUEST });
  try {
    const response = yield getChatRooms(payload);
    yield put({ type: FETCH_CHAT_ROOMS_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({
      type: FETCH_CHAT_ROOMS_FAILURE,
      payload:
        error?.response?.data?.error_description ||
        "Sorry! network issue detected",
    });
  }
}
function* sendMessageSaga({ payload }: any): any {
  yield put({ type: SEND_MESSAGE_REQUEST });
  try {
    const response = yield postSendChatMessage(payload);

    yield put({ type: SEND_MESSAGE_SUCCESS, payload: response.data });
  } catch (error: any) {
    console.log(error);
    yield put({
      type: SEND_MESSAGE_FAILURE,
      payload:
        error?.response?.data?.error_description ||
        "Sorry! network issue detected",
    });
  }
}
function* fetchMessagesSaga({ payload }: any): any {
  yield put({ type: FETCH_MESSAGE_REQUEST });
  try {
    const response = yield getChatMessages(payload);
    yield put({ type: FETCH_MESSAGE_SUCCESS, payload: response.data });
  } catch (error: any) {
    yield put({
      type: FETCH_MESSAGE_FAILURE,
      payload:
        error?.response?.data?.error_description ||
        "Sorry! network issue detected",
    });
  }
}
export function* engagementSaga() {
  yield takeEvery(FETCH_COMMUNITIES, fetchCommunityPostsSaga);
  yield takeEvery(FETCH_CHAT_ROOMS, fetchChatRoomsSaga);
  yield takeEvery(SEND_MESSAGE, sendMessageSaga);
  yield takeEvery(FETCH_MESSAGE, fetchMessagesSaga);
}
