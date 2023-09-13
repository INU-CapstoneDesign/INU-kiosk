import KioskMenu from './pages/KisokMenu';
import {styled} from 'styled-components';

const Styleddiv = styled.div`
	display:flex;
	flex-direction:column;
	text-align:center;
`;

export default function App() {
	return (
		<Styleddiv>
			<KioskMenu />
		</Styleddiv>
}
