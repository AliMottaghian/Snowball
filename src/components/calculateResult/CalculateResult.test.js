import CalculateResult from "./CalculateResult";

describe("<CalculateResult />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CalculateResult timeVal="11:20" angleVal="50"/>);
  });
  it("should render CalculateResult component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the degree with (deg)", () => {
    const degree = wrapper.find("p").at(1);
    expect(degree.text()).toBe("Angle:50(deg)");
  });
  it("should render two paragraph", () => {
    const paragraph = wrapper.find("p");
    expect(paragraph).toHaveLength(2);
  });
});
