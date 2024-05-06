import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux//filters/slice';
import { useId } from 'react';
import { Input, Label } from './SearchBox.styled';
import { selectFilter } from '../../redux/filters/slice';

const Filter = () => {
	const dispatch = useDispatch();
	const value = useSelector(selectFilter);
	const searchId = useId();

	return (
		<>
			<Label htmlFor={searchId}>
				<span>Find contacts by name</span>
			</Label>
			<Input
				value={value}
				id={searchId}
				type='text'
				name='search'
				onChange={e => dispatch(changeFilter(e.target.value.trim()))}
			/>
		</>
	);
};

export default Filter;
