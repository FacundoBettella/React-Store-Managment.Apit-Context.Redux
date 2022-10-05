import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { MainPage } from "../page/MainPage";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<MainPage />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
      {/* <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<MainPage />} /> */}
    </Routes>
  );
};
