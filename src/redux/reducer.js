export default function reducer(
  state = {
    carousel: [],
    asUsedBy: [],
    needWorkDone: [],
    whatGreatAboutIt: [],
    crowdFavorite: [],
    getWorkDone: [],
    apiEnterprise: [],
    topJobsCategories: [],
  },
  action
) {
  switch (action.type) {
    case "FETCH_CAROUSEL":
      return { ...state, carousel: action.payload };
    case "FETCH_ASUSEDBY":
      return { ...state, asUsedBy: action.payload };
    case "FETCH_NEEDWORKDONE":
      return { ...state, needWorkDone: action.payload };
    case "FETCH_WHATGREATABOUTIT":
      return { ...state, whatGreatAboutIt: action.payload };
    case "FETCH_CROWDFAVORITE":
      return { ...state, crowdFavorite: action.payload };
    case "FETCH_GETWORKDONE":
      return { ...state, getWorkDone: action.payload };
    case "FETCH_APIENTERPRISE":
      return { ...state, apiEnterprise: action.payload };
    case "FETCH_TOPJOBSCATEGORIES":
      return { ...state, topJobsCategories: action.payload };
    default:
      return state;
  }
}
