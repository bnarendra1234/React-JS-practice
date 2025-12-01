import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./redux/store/store.js";

// const rootElement = createRoot(document.getElementById("root"));
// rootElement.render(<App />);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={mystore}>
      <App />
    </Provider>
  </BrowserRouter>
);