import React from "react";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Dashboard } from "../pages/Dashboard";
import { OrderList } from "../pages/OrderList";
import { Analytics } from "../pages/Analytics";
import { Calendar } from "../pages/Calendar";
import { Chat } from "../pages/Chat";
import { Customer } from "../pages/Customer";
import { CustomerDetails } from "../pages/CustomerDetails";
import { FoodDetails } from "../pages/FoodDetails";
import { OrderDetail } from "../pages/OrderDetail";
import { Reviews } from "../pages/Reviews";
import { Wallet } from "../pages/Wallet";
import { Foods } from "../pages/Foods";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="OrderList" element={<OrderList />} />
        <Route path="Analytics" element={<Analytics />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Customer" element={<Customer />} />
        <Route path="CustomerDetails" element={<CustomerDetails />} />
        <Route path="FoodDetails" element={<FoodDetails />} />
        <Route path="Foods" element={<Foods />} />
        <Route path="OrderDetail" element={<OrderDetail />} />
        <Route path="Reviews" element={<Reviews />} />
        <Route path="Wallet" element={<Wallet />} />
      </Route>
        )
        );
        
        export const Router_App = () => {
          return <RouterProvider router={router} />;
        };