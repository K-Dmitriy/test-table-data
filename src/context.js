import { createContext, useReducer } from 'react';
import reducer from './reducer';

export const DataContext = createContext();

const initState = {
	data: {
		tables: [],
		// tables: [{ id: '', table: [], colNames: [] }],
	},
	isLoad: false,
	isRequestSend: false,
	dataUrl: '',
};

export const ContexProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initState);

	value.addTable = (id, table, colNames) =>
		dispatch({ type: 'add-table', payload: { id, table, colNames } });
	value.sendRequest = () => dispatch({ type: 'send-request' });
	value.addColNames = (names) => dispatch({ type: 'add-col-names', payload: names });
	value.setDataUrl = (url) => dispatch({ type: 'set-data-url', payload: url });
	value.addIdTable = (id) => dispatch({ type: 'add-id-table', payload: id });

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
