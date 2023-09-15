import { restaurants } from '../data.json';
import RestaurantRow from './RestaurantRow';

export default function RestaurantTable({ filterText }: { filterText: string }) {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.includes(filterText)
  );

  return (
    <div>
      {filteredRestaurants.map((restaurant) => (
        <RestaurantRow key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}