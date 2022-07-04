import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../Login";
import ProductDetail from "../ProductDetail";

function PrivateRoute({ authenticate }: any) {
	return authenticate ? <ProductDetail /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
