import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;
const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&:hover {
		transform: scale(1.1);
	}
	img {
		width: 300px;
	}
`;

interface Cardinfo {
	item: any;
}

function ProductCard({ item }: Cardinfo) {
	const navigiate = useNavigate();
	const detail = (id: string) => {
		navigiate(`/product/${id}`);
	};
	return (
		<Wrapper>
			<Card
				onClick={() => {
					detail(item.id);
				}}
			>
				<img src={item.img}></img>
				<div>{item.choice == true ? "Conscious choise" : null}</div>
				<div>{item.title}</div>
				<div>{item.price}</div>
				<div>{item.new === true ? "신제품" : null}</div>
			</Card>
		</Wrapper>
	);
}

export default ProductCard;
