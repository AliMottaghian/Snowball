import Clock from "react-clock";
import PropTypes from "prop-types";
import  './CalculateResult.css'

const CalculateResult = ({ timeVal, angleVal }) => {
  return (
    <div className="textCenter calculateResult">
      <Clock value={timeVal} renderSecondHand={false}/>
      <div className="logs">
          <p><strong>Selected time:</strong>{timeVal}</p>
          <p><strong>Angle:</strong>{angleVal}(deg)</p>
      </div>
    </div>
  );
};

CalculateResult.prototype = {
  timeVal: PropTypes.string,
  angleVal: PropTypes.number,
};
export default CalculateResult;
