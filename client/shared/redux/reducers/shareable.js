import * as types from "../types";
import initialState from "../store/initialState";

export default function shareables(
  shareables = initialState.shareables,
  action = {}
) {
  switch (action.type) {
    case types.SHAREABLES_SEARCH_REQUEST:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: true
        }
      );
    case types.SAVE_SEARCH_PARAMS:
      return Object.assign(
        {},
        {
          ...shareables,
          searchParams: action.searchParams
        }
      );
    case types.SHAREABLE_CATEGORIZATIONS_SUCCESS:
      return Object.assign(
        {},
        {
          ...shareables,
          categorizationMeta: action.categorizationMeta
        }
      );
    case types.SHAREABLES_ALL_REQUEST:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: true,
          shareableFetchError: false
        }
      );
    case types.SHAREABLES_SET_CURRENT:
      return Object.assign(
        {},
        {
          ...shareables,
          selectedIndex: action.selectedIndex,
          isFetchingShareables: false,
          shareableFetchError: false
        }
      );
    case types.SHAREABLE_SINGLE_REQUEST:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: true,
          shareableFetchError: false
        }
      );
    case types.SHAREABLE_SINGLE_REQUEST_SUCCESS:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: false,
          shareableFetchError: false,
          items: shareables.items.concat(action.shareables),
          selectedIndex: action.shareables.id
        }
      );
    case types.SHAREABLE_SINGLE_REQUEST_ERROR:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: false,
          shareableFetchError: true
        }
      );
    case types.SHAREABLES_ALL_REQUEST_SUCCESS:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: false,
          shareableFetchError: false,
          points: action.shareables.points,
          items: action.shareables.items,
          total: action.shareables.total
        }
      );
    case types.SHAREABLES_ALL_REQUEST_ERROR:
      return Object.assign(
        {},
        {
          ...shareables,
          isFetchingShareables: false,
          shareableFetchError: true
        }
      );
    default:
      return shareables;
  }
}
