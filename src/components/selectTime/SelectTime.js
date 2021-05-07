import TimePicker from "react-time-picker";
import PropTypes from "prop-types";

const SelectTime = ({ pickerChange, timeVal }) => {
  return (
    <div>
      <label>Please select a time</label>
      <div>
        <TimePicker onChange={(v) => pickerChange(v)} value={timeVal} disableClock={true}/>
      </div>
    </div>
  );
};

SelectTime.propTypes = {
  pickerChange: PropTypes.func.isRequired,
  timeVal: PropTypes.string,
};

export default SelectTime;
