import Pocketbase from 'pocketbase';
import { serializeNonPOJOs } from './lib/utils';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase('http://localhost:8090');

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('Cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	//console.log(event);
	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
