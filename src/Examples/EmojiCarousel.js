import "./EmojiCarousel.css"

export default function App() {
  return (
    <div className="wrapper">
      <div className="carousel">
        <div className="carousel__item">
          <div className="carousel__item-head">🐳</div>
          <div className="carousel__item-body">
            <p className="title">spouting whale</p>
            <p>Unicode: I Love You ❤️</p>
          </div>
        </div>
        
      
        <div className="carousel__item">
          <div className="carousel__item-head">🐚</div>
          <div className="carousel__item-body">
            <p className="title">spiral shell</p>
            <p>Unicode: I Love You ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
}

