import { Icon } from '@mui/material'
import { Filters, FiltersName } from 'lib/components'
import { TodoItem } from 'lib/components/TodoItem'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

import { useTodo } from './useTodo'

export const ScreenTodo = () => {
	const T = useTranslations()
	const { todo, setTodo, text, setText, AddTodo, filters, setFilters, FILTER_MAP } = useTodo()

	const TodoFilters = todo.filter(FILTER_MAP[filters]).map(todos => (
		<TodoItem
			text={todos.todo}
			id={todos.id}
			key={todos.id}
			isDone={todos.isDone}
			deleteClick={() => {
				setTimeout(() => {
					setTodo(prev => {
						return prev.filter(item => item.id !== todos.id)
					})
				}, 400)
			}}
			checkClick={() => {
				if (todos.isDone) []
				setTodo(prev => {
					return prev.map(item => {
						return item.id === todos.id ? { ...item, isDone: !item.isDone } : item
					})
				})
			}}
		/>
	))

	return (
		<>
			<Todo>
				<Title>{T.Input.title}</Title>
				<TodoInput>
					<Input
						type='text'
						placeholder={T.Input.placeholder}
						value={text}
						onChange={event => setText(event.target.value)}
						onKeyDown={event => {
							{
								event.key === 'Enter' && text && AddTodo()
							}
						}}
					/>
					<ButtonAddTodo
						onClick={() => {
							{
								text && AddTodo()
							}
						}}>
						<Icon sx={{ fontSize: 30 }}> add_circle</Icon>
					</ButtonAddTodo>
				</TodoInput>
				<Filters
					onChange={event => {
						const target = event.target.value

						if (target === FiltersName.Done) {
							setFilters(FiltersName.Done)
						}

						if (target === FiltersName.Todo) {
							setFilters(FiltersName.Todo)
						}

						if (target === FiltersName.All) {
							setFilters(FiltersName.All)
						}
					}}></Filters>
			</Todo>
			<TodoList>
				<ListItem>{TodoFilters}</ListItem>
			</TodoList>
		</>
	)
}

const Todo = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	margin-top: 100px;
`

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.titleTodo};
	padding-bottom: 20px;
`

const TodoInput = styled.div`
	display: flex;
	align-items: center;
`

const Input = styled.input`
	height: 40px;
	width: 320px;
	font-size: 20px;
	border: none;
	padding-left: 10px;

	:focus {
		outline: none;
	}
`
const ButtonAddTodo = styled.button`
	position: absolute;
	transform: translateX(280px);
	color: ${({ theme }) => theme.colors.buttonAdd};
`
const TodoList = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: flex-start;
	margin: 40px 0;
	height: 100%;
	overflow-y: auto;

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: #5fc3e4;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #e55d87;
	}
`

const ListItem = styled.ul``
