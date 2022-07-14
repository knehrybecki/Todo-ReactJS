import { FiltersName } from 'lib/components'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export type Todos = {
	todo: string
	isDone: boolean
	id: string
}

type FilterMap = {
	[propertyName: string]: (task: Todos) => boolean
}

export const useTodo = () => {
	const [todo, setTodo] = useState<Array<Todos>>([])
	const [text, setText] = useState<string>('')
	const [filters, setFilters] = useState(FiltersName.All)

	const AddTodo = () => {
		setTodo(() =>
			[...todo].concat({
				isDone: false,
				todo: text,
				id: uuidv4(),
			})
		)
		setText('')
	}

	const FILTER_MAP: FilterMap = {
		All: () => true,
		Done: task => task.isDone,
		Todo: task => !task.isDone,
	}

	return {
		todo,
		setTodo,
		text,
		setText,
		AddTodo,
		filters,
		setFilters,
		FILTER_MAP,
	}
}
