import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientDashboard from "./pages/ClientDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import DeclareRoute from "./pages/DeclareRoute";
import AvailableRoutes from "./pages/AvailableRoutes";
import DriverRequests from "./pages/DriverRequests";
import MyShipments from "./pages/MyShipments";
import NewShipment from "./pages/NewShipment";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/declare-route" element={<DeclareRoute />} />
        <Route
         path="/available-routes"
         element={
        <ProtectedRoute role="client">
        <AvailableRoutes />
       </ProtectedRoute>
  }
/>
        <Route
         path="/client-dashboard"
         element={
         <ProtectedRoute role="client">
         <ClientDashboard />
         </ProtectedRoute>
  }
/>
          <Route
          path="/driver-requests"
          element={
            <ProtectedRoute role="driver">
              <DriverRequests />
            </ProtectedRoute>
          }
        />

            <Route path="/new-shipment" element={<NewShipment />} />



          <Route
            path="/my-shipments"
            element={
              <ProtectedRoute role="client">
                <MyShipments />
              </ProtectedRoute>
            }
/>


            <Route
              path="/driver-dashboard"
              element={
                <ProtectedRoute role="driver">
                  <DriverDashboard />
                </ProtectedRoute>
              }
            />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
