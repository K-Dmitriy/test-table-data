import { useContext } from 'react';
import { DataContext } from '../../context';
import Service from '../../services/Service';

const dataService = new Service();

const Form = ({ id }) => {
	const { data, addTable, sendRequest, dataUrl, setDataUrl } = useContext(DataContext);

	const onAddHandler = (evt, id) => {
		evt.preventDefault();
		// if (dataUrl) {
		sendRequest();
		dataService.getData(dataUrl || 'https://jsonplaceholder.typicode.com/users').then((res) => {
			if (id) {
				addTable(id, res, Object.keys(res[0]));
			} else {
				addTable(data.tables.length + '.' + dataUrl, res, Object.keys(res[0]));
			}
			setDataUrl('');
		});
		// } else {
		// }
	};

	return (
		<form onSubmit={(evt) => onAddHandler(evt, id)}>
			<fieldset>
				<legend>Add table</legend>
				<label>
					Data Url:
					<input
						type="text"
						name="dataUrl"
						placeholder="Enter url your json"
						value={dataUrl}
						onChange={(evt) => setDataUrl(evt.target.value)}
					/>
				</label>
				<button type="submit">Add table</button>
			</fieldset>
		</form>
	);
};

export default Form;
