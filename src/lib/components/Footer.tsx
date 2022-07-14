import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

enum FooterBy {
	by = 'Kamil Nehrybecki',
}

export const Footer = () => {
	const T = useTranslations()
	const year = new Date().getFullYear()

	return (
		<FooterContainer>
			Copyright &copy; {year} {FooterBy.by}
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.titleTodo};
`
