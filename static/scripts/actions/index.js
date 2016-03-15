const TOGGLE_HELLOWORLD = 'TOGGLE_HELLOWORLD';

export const actionTypes = {
	TOGGLE_HELLOWORLD
};

export const actions = {
	toggleHelloWorld: () => {
		return {type: TOGGLE_HELLOWORLD}
	}
}