import { Spinner, Center } from '@chakra-ui/react';

export default function StyledSpinner(props) {
	return (
		<Center>
			<Spinner color="blue" size="lg" {...props} />
		</Center>
	)
}