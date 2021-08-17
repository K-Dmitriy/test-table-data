import { useContext } from 'react';
import { DataContext } from '../../context';
import RowData from '../RowData';

import './TableData.css';

const TableData = ({ id }) => {
	const { data } = useContext(DataContext);

	return (
		<div className="table-container">
			{data.tables.map((table) => (
				<table key={table.id} border="1">
					<thead>
						<tr>
							{table.id === id ? table.colNames.map((key) => <th key={key}>{key}</th>) : null}
						</tr>
					</thead>
					<tbody>{table.id === id ? <RowData id={id} table={table} /> : null}</tbody>
				</table>
			))}
		</div>
	);
};

export default TableData;
