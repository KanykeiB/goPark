// ----------------------auth----------------------//
export const loading = (state) => state.auth.loading;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const errorMessage = (state) => state.auth.error;
// export const userData = (state) => state.auth.user;

// -----------------------get events--------------//
export const eventLoader = (state) => state.events.loading;
export const eventList = (state) => state.events;
export const eventListItem = (state) => state.events.data;

export const loadingUser = (state) => state.user.loading;
export const userData = (state) => state.user.user;

export const filterEvent =(state)=> state.filterEvent