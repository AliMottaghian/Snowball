import { useState, useEffect } from "react";
import Card from "./components/ui/card/Card";
import SelectTime from "./components/selectTime/SelectTime";
import AnalogClock from "./components/calculateResult/CalculateResult";
import { angleCalculator } from "../src/helpers/angleCalculator";

const App = () => {
  const [timeVal, setTimeVal] = useState(null);
  const [angleVal, setAngleVal] = useState(null);

  const pickerChange = (val) => {
    setTimeVal(val);
  };
  useEffect(() => {
    if (timeVal) {
      const result = angleCalculator(timeVal);
      setAngleVal(result);
    }
  }, [timeVal]);
  return (
    <div className="App">
      <section>
        <Card>
          <SelectTime pickerChange={pickerChange} timeVal={timeVal} />
        </Card>
      </section>
      {angleVal && timeVal && (
        <section>
          <Card>
            <AnalogClock timeVal={timeVal} angleVal={angleVal} />
          </Card>
        </section>
      )}
    </div>
  );
};

export default App;
