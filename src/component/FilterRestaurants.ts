import Restaurant from '../types/Restaurant';

export default function FilterRestaurants(restaurants: Restaurant[], filterText: string): Restaurant[] {
	return restaurants.filter((restaurant) => restaurant.name.includes(filterText));
  }