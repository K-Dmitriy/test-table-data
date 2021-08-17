function reducer(state, { type, payload }) {
	switch (type) {
		case 'add-table':
			let tables = state.data.tables.map((table) => {
				console.log(2, table.id, payload.id);
				if (table.id === payload.id) {
					console.log(3, 'ff');
					return payload;
				}

				return table;
			});

			if (tables.length === 0) {
				tables = [payload];
			} else {
				tables = [];
			}

			return {
				...state,
				data: { ...state.data, tables },
				isLoad: true,
				isRequestSend: false,
			};

		case 'send-request':
			return { ...state, isRequestSend: true };

		case 'add-col-names':
			return { ...state, colNames: payload };

		case 'add-id-table':
			return { ...state, tableIds: [...state.tableIds, payload] };

		case 'set-data-url':
			return { ...state, dataUrl: payload };

		default:
			console.error('Unknown action');
			return state;
	}
}

export default reducer;
