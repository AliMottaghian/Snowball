import App from "./App";
import Card from "./components/ui/card/Card";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render App component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render one <Card /> when init", () => {
    const cardBox = wrapper.find(Card);
    expect(cardBox).toHaveLength(1);
  });
});
