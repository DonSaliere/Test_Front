import { connect } from 'react-redux';
import News from './News';
import { addNewsCreator, updateNewsCreator, updateNewsTextCreator, deleteNewsCreator,updateNewsIdCreator} from '../../Redux/news-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// let AuthRedirectComponent = withAuthRedirect(News);

const mapStateToProps = state => ({
  news: state.news.NewsData,
  newNewsText: state.news.newNewsText,
  selectedID: state.news.selectedID
})

const mapDispatchToProps = dispatch => {
  return {
    addNews: () => {
      dispatch(addNewsCreator());
    },
    updateNews: () => {
      dispatch(updateNewsCreator());
    },
    updateNewsText: (idNews) => {
      dispatch(updateNewsTextCreator(idNews));
    },
    deleteNews: () => {
      dispatch(deleteNewsCreator());
    },
    updateNewsId: (idNews) => {
      dispatch( updateNewsIdCreator(idNews));
    }
  
  }
}

const NewsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(News));

export default NewsContainer;