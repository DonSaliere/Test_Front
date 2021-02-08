const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';
const DELETE_NEWS = 'DELETE_NEWS';
const UPDATE_NEWS = 'UPDATE_NEWS';
const UPDATE_ID = 'UPDATE_ID';
const ADD_NEWS = 'ADD_NEWS';

const initialState = {
  NewsData: [
    { id: 1, news: 'Новость1', active: 1 },
    { id: 2, news: 'Новость2', active: 1 },
    { id: 3, news: 'Новость3', active: 1 },
    { id: 4, news: 'Новость4', active: 1 }
  ],
  newNewsText: "",
  selectedID: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      const newNews = {
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
    case UPDATE_NEWS: {
      return {
        ...state,
        NewsData: state.NewsData.filter(p => {
          if (p.id === state.selectedID)
            return p.news = state.newNewsText;
          else
            return p;
        }),
        newNewsText: "",
        selectedID: null

      }
    }
    case UPDATE_ID: {
      return {
        ...state,
        selectedID: action.selectedID === state.selectedID ? null : action.selectedID
      };
    }
    case DELETE_NEWS: {
      return {
        ...state,
        newNewsText: "",
        selectedID: null,
        NewsData: state.NewsData.filter(p => {
          if (p.id === state.selectedID)
            return p.active = 0;
          else
            return p;
        })
      }
    }
    case UPDATE_NEW_NEWS_TEXT: {

      return {
        ...state,
        newNewsText: action.newText === state.newNewsText ? null : action.newText
      };

    }
    default:
      return state;
  }
}

export const addNewsCreator = () => ({ type: ADD_NEWS });
export const updateNewsCreator = (id) => ({ type: UPDATE_NEWS, NewsId: id });
export const updateNewsTextCreator = (news) => ({ type: UPDATE_NEW_NEWS_TEXT, newText: news });
export const deleteNewsCreator = () => ({ type: DELETE_NEWS });
export const updateNewsIdCreator = (id) => ({ type: UPDATE_ID, selectedID: id });