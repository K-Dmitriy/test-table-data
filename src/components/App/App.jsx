import { useContext } from 'react';
import { DataContext } from '../../context';
import AppData from '../AppData';
import Form from '../Form';

import './App.css';

function App() {
	const { data } = useContext(DataContext);

	return (
		<main className="app">
			{data.tables.length ? data.tables.map((table) => <AppData key={table.id} id={table.id} />) : null}
			<Form />
		</main>
	);
}

export default App;
