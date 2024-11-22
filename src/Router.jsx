import { Route, Routes } from "react-router";
import { AppRoute } from "../Utils/AppRouter";
import { HomePage } from "./Pages/HomePage";
import InventoryPage from "./Pages/InventoryPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Base} element={<HomePage />} />
      </Routes>

      <Routes>
        <Route path={AppRoute.Inventory} element={<InventoryPage />} />
      </Routes>
    </>
  );
};
