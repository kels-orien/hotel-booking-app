import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Router from "next/router";

// Mock next/router, otherwise <Link prefetch> breaks tests
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

  
Enzyme.configure({ adapter: new Adapter() });
