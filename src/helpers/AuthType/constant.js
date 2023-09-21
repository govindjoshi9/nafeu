const BASE_URL = "https://backend.stelarx.co/api"
export const API_ROUTES = {
  GET_DASHBOARD: BASE_URL + "/users/dashBoard",
  GET_TOTALINCOME: BASE_URL + "/users/totalIncomes",
  POST_STACKING: BASE_URL + "/deposit",
  GET_PRICE: BASE_URL + "/deposit/price",
  GET_STACKING_SUMMARY: BASE_URL + "/deposit/summary",
  GET_DIRECT_MEMBER: BASE_URL + "/users/directMembers",
  GET_MYALL_TEAM: BASE_URL + "/users/myTeam",
  POST_STAKING_BONUS: BASE_URL + "/users/incomes",
  GET_DAILY_PROFIT: BASE_URL + "/deposit/dailyProfit",
  POST_LEVEL_TEAM: BASE_URL + "/users/levelMembers",
  POST_UPDATE_PROFILE: BASE_URL + "/users/update-profile",
  GET_SPONCER_NAME: BASE_URL + "/auth/register?UplineId",
  PUT_CHANGE_PASSWORD: BASE_URL + "/Auth/changePassword",
}
