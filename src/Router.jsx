import { Route, Routes } from "react-router";
import { AppRoute } from "../Utils/AppRouter";
import { HomePage } from "./Pages/HomePage";
import InventoryPage from "./Pages/InventoryPage";
import { NotFoundCardPage } from "./Pages/NotFoundCardPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Base} element={<HomePage />} />
        <Route path={AppRoute.Inventory} element={<InventoryPage />} />
        <Route path="*" element={<NotFoundCardPage />} />
      </Routes>
    </>
  );
};
