import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Skills } from "../pages/Skills";

export const Router = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="skills" element={<Skills />} />
			</Routes>
    </BrowserRouter>
  );
};
