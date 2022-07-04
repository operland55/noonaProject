import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "./component/ProductCard";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
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
function ProductAll() {
	const [query, setQuery] = useSearchParams();
	const [products, setProducts] = useState<ProductInfo[]>([]);
	console.log("qq", query);
	const getProducts = async () => {
		let searchQuery = query.get("q") || "";
		const url = `http://localhost:5000/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		setProducts(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);
	console.log(products);
	return (
		<Wrapper>
			{products.map((item, key) => {
				return <ProductCard item={item} />;
			})}
		</Wrapper>
	);
}

export default ProductAll;
