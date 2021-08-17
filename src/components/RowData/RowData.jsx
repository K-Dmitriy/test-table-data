const RowData = ({ table }) => {
	return (
		<>
			{table.table.map((item, index) => (
				<tr key={item.id}>
					{table.colNames.map((name) => (
						<td key={index + '.' + name}>{'' + item[name]}</td>
					))}
				</tr>
			))}
		</>
	);
};

export default RowData;
