import type Restaurant from '../types/Restaurant';

import Foods from './Food';

type RestaurantRowProps = {
	restaurant: Restaurant;
};

export default function RestaurantRow({restaurant}: RestaurantRowProps) {
	const {id, category, name, menu} = restaurant;
	return (
		<div className='Menu' key={id}>
			<p>카테고리: {category}</p>
			<h2>{name}</h2>
			<ul>
				{menu.map(food => (
					<Foods
						key={food.id}
						food={food}/>
				))}
			</ul>
		</div>
	);
}


