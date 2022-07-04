import { useState } from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./ProductAll";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./component/PrivateRoute";
//1. 전체상품페이지,로그인페이지,상품상세페이지
//2. 전체상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되어있을경우에는 로그인페이지가 먼저 나온다
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있따
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃이되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
//8. 로그인을하면 로그아웃보이고 로그아웃하면 로그인 보인다
//9. 상품을 검색 할 수 있다

function App() {
	const [authenticate, setAuthenticate] = useState(false); //true면로그인 false면 로그인아님
	console.log(authenticate);
	return (
		<div className="App">
			<Navbar authenticate={authenticate} />
			<Routes>
				<Route path="/" element={<ProductAll />} />
				<Route
					path="/login"
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
				<Route
					path="/product/:id"
					element={<PrivateRoute authenticate={authenticate} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
