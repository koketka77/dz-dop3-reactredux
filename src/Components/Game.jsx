import React from 'react';
import { useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { guessNumber, resetGame } from '../store/actions/action';


const Game = () => {
    const dispatch = useDispatch();
    const { randomNumber, number } = useSelector((state) => state);
  
    const handleGuess = (event) => {
      event.preventDefault();
      
      dispatch(guessNumber(parseInt(event.target.number.value, 10)));
    };
  
    const handleReset = () => {
      dispatch(resetGame());
    };
  
    const renderMessage = () => {
    
  
      if (number < randomNumber) {

        return <p>Не правильно, берите выше.</p>;
        

      }
      if(number === randomNumber){
        return <div className='congrats'>
                 <p>Поздравляем, вы отгадали число!</p>
                 <button onClick={handleReset}>Заново</button>
               </div>
      }
  
      if (number > randomNumber) {
        return <p>Не правильно, берите ниже.</p>;
      }
    };
    return (
        <div className='shit'>
      <form onSubmit={handleGuess}>
        <input type="text" name="number" />
        <button type="submit">Попробовать</button>
      </form>
      {renderMessage()}
    </div>
    );
}

export default Game;
