import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 200px;
`;

interface ProductInfo {
	choice: boolean;
	id: number;
	img: string;
	new: boolean;
	price: number;
	size: [];
	title: string;
}

function ProductDetail() {
	const { id } = useParams();
	const [products, setProducts] = useState<ProductInfo>();

	const getProductDetail = async () => {
		const url = `http://localhost:5000/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		console.log(data);
		setProducts(data);
	};
	useEffect(() => {
		getProductDetail();
	}, []);

	console.log(products);
	return (
		<>
			<ProductInfo>
				<div>
					<img src={products?.img} />
				</div>
				<div>
					<h1>{products?.title}</h1>
					<h1>{products?.price}</h1>
					<select value="1">
						<option value="1">1</option>
						<option value="1">2</option>
						<option value="1">3</option>
					</select>
				</div>
			</ProductInfo>
		</>
	);
}

export default ProductDetail;
