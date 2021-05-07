import "regenerator-runtime/runtime";
import { configure, shallow} from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
configure({ adapter: new Adapter() });

global.shallow = shallow;
