import styled from 'styled-components'

const SmallerContainer = styled.div`
	max-width: 850px;
	margin: 0 auto;

	@media (max-width: 992px) {
		width: 95%;
	}
`

export { SmallerContainer }
