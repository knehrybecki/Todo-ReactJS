import { ScreenTodo } from 'features/Todo/ScreenTodo'
import { Footer } from 'lib/components'
import { theme } from 'lib/styles'
import styled, { ThemeProvider } from 'styled-components'

export const App = () => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<ScreenTodo />
			<Footer />
		</AppContainer>
	</ThemeProvider>
)

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: ${({ theme }) => theme.colors.background};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`
