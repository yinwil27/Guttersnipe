const initialState = {
    shareables : {
        isFetchingShareables: false,
        shareableFetchError: false,
        items: [],
        selectedIndex: -1,
      categorizationMeta: {}
    },
  auth : {
      authenticated: false,
    error: ''
  },
  kropotkin: {
      quote: ''
  }
};

export default initialState;
