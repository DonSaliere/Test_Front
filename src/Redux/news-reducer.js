//const NEWS_ADD = 'NEWS_ADD'
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT'
const DELETE_NEWS = 'DELETE_NEWS'
const UPDATE_NEWS = 'UPDATE_NEWS'
const UPDATE_ID = 'UPDATE_ID'

const initialState = {
  NewsData: [
    { id: 1, news: 'Новость', active: 1 },
    { id: 2, news: 'Новость', active: 1 },
    { id: 3, news: 'Новость', active: 1 },
    { id: 4, news: 'Новость', active: 1 }
  ],
  newNewsText: "",
  selectedID: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEWS: {
      if (state.selectedID == null) {
        let newNews = {
          id: Math.max(...state.NewsData.map(i => i.id)) + 1,
          news: state.newNewsText,
          active: 1
        };
        return {
          ...state,
          NewsData: [...state.NewsData, newNews],
          newNewsText: "",
          selectedID: null
        };
      }
      else
        return {
          ...state,
          newNewsText: "",
          selectedID: null,
          NewsData: state.NewsData.filter(p => {
            if (p.id == state.selectedID)
              return p.news = state.newNewsText
            else
              return p
          })
        }
    }
    case UPDATE_ID: {
      return { ...state, selectedID: action.selectedID }
    }
    case DELETE_NEWS: {
      return {
        ...state,
        newNewsText: "",
        selectedID: null,
        NewsData: state.NewsData.filter(p => {
          if (p.id == state.selectedID)
            return p.active = 0
          else
            return p
        })
      }
    }
    case UPDATE_NEW_NEWS_TEXT: {

      return {
        ...state,
        newNewsText: action.newText
      }

    }
    default:
      return state
  }
}

export const updateNewsCreator = (id) => ({ type: UPDATE_NEWS, NewsId: id })
export const updateNewsTextCreator = (news) => ({ type: UPDATE_NEW_NEWS_TEXT, newText: news })
export const deleteNewsCreator = (idnews) => ({ type: DELETE_NEWS })
export const updateNewsIdCreator = (id) => ({ type: UPDATE_ID, selectedID: id })