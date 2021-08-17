import { useContext } from 'react';
import { DataContext } from '../../context';
import Form from '../Form';
import Preloader from '../Preloader';
import TableData from '../TableData';

const AppData = ({ id }) => {
	const { isLoad, isRequestSend } = useContext(DataContext);

	return (
		<>
			<Form id={id} />
			{isLoad ? <TableData id={id} /> : isRequestSend && <Preloader />}
		</>
	);
};

export default AppData;
