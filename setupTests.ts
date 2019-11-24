import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

(global as any).jestExpect = expect as any;

Enzyme.configure({
  adapter: new Adapter(),
})