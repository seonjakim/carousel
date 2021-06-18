import "../styles/App.css"
import {scrollMove} from './scrollMove';
// import InnerContents from '../components/innerContents'

const pagiNation = (props) => {
  const {movie_img} = props;

  const repeat = movie_img ? movie_img.map((el, idx) => 
    <div onClick={() => scrollMove(idx)} key={el} className="pagination_pinpoint"></div>
  ): "";
  return (
    <div className="wrapper pagiNation">
      {/* <InnerContents /> */}
      {repeat}
    </div>
  )
}

export default pagiNation;