import { Icon } from '@mui/material'
import { useRef } from 'react'
import styled from 'styled-components'

type TodoText = {
	text: string
	id: string
	isDone: boolean
	checkClick(): void
	deleteClick(): void
}

enum Icons {
	check = 'check',
	close = 'close',
}

export const TodoItem: React.FunctionComponent<TodoText> = ({
	text,
	id,
	isDone,
	checkClick,
	deleteClick,
}) => {
	const todref = useRef(null)
	return (
		<Item id={id} ref={todref} defaultChecked={isDone}>
			{text}
			<ButtonsActions>
				<CheckButton onClick={() => checkClick()} defaultChecked={isDone}>
					<Icon> {isDone ? Icons.close : Icons.check}</Icon>
				</CheckButton>
				<TrashButton
					onClick={(event: React.MouseEvent<HTMLElement>) => {
						event.currentTarget.closest('li')!.style.animation = 'fadeOut 500ms'
						deleteClick()
					}}>
					<Icon>delete</Icon>
				</TrashButton>
			</ButtonsActions>
		</Item>
	)
}

const Item = styled.li`
	background-color: ${({ theme, defaultChecked }) =>
		defaultChecked ? theme.colors.todoItemCheckBackground : theme.colors.todoItemBackground};
	text-decoration: ${({ defaultChecked }) => (defaultChecked ? 'line-through' : 'none')};
	margin: 20px;
	min-width: 250px;
	padding: 20px 10px 20px 10px;
	font-size: 18px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	animation: fadeIn 500ms;
	transition: all 500ms;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
`
const ButtonsActions = styled.div``

const CheckButton = styled.button`
	color: ${({ theme, defaultChecked }) =>
		defaultChecked ? theme.colors.trash : theme.colors.check};
`
const TrashButton = styled.button`
	color: ${({ theme }) => theme.colors.trash};
`
