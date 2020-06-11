import { connect } from 'react-redux';
import News from './News';
import { updateNewsCreator, updateNewsTextCreator, deleteNewsCreator,updateNewsIdCreator} from '../../Redux/news-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let AuthRedirectComponent = withAuthRedirect(News);

const mapStateToProps = state => ({
  news: state.news.NewsData,
  newNewsText: state.news.newNewsText
})

const mapDispatchToProps = dispatch => {
  return {
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

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default NewsContainer;