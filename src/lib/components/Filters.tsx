import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

type FiltersProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export enum FiltersName {
	All = 'All',
	Todo = 'Todo',
	Done = 'Done',
}

export const Filters: React.FunctionComponent<FiltersProps> = ({ onChange }) => {
	const T = useTranslations()

	return (
		<FilterContainer>
			<RadioGroup
				defaultValue={FiltersName.All}
				name='radio-buttons-group'
				onChange={onChange}
				row>
				<FormControlLabel
					value={FiltersName.All}
					labelPlacement='bottom'
					control={<Radio size='small' />}
					label={T.filters.All}
				/>
				<FormControlLabel
					value={FiltersName.Todo}
					labelPlacement='bottom'
					control={<Radio size='small' />}
					label={T.filters.Todo}
				/>
				<FormControlLabel
					value={FiltersName.Done}
					labelPlacement='bottom'
					control={<Radio size='small' />}
					label={T.filters.Done}
				/>
			</RadioGroup>
		</FilterContainer>
	)
}

const FilterContainer = styled.div`
	margin-top: 10px;
`

const Todo = styled.input``

const DoneTodo = styled.input``
