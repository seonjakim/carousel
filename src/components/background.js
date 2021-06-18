import InnerContents from './innerContents';
import {scrollMove} from '../lib/scrollMove';

const background = (props) => {
  const {movie_img} = props;
  
  const backgroundImgs = movie_img ? movie_img.map((el, idx) => 
    <div key={idx} style={{backgroundImage: `url(${el})`}} className="backgroundImg innerContentCenter">
      <InnerContents />
      <div onClick={() => scrollMove('next')} className="arrowBtn"></div>
    </div>
  ) : "please wait";

  return (
    <div>{backgroundImgs}</div>
  )
}
export default background;