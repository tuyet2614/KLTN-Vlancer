
import type { RouteObject } from "react-router-dom";
import SearchService from "..";
import PostService from "../component/postService";
export const RoutesSearchService = {
  SEARCH_SERVICE_ROUTE: "/search-service",
    POST_SERVICE_ROUTE: "/post-service"
};

export const routeSearchService: RouteObject[] = [
  {
    path: "/search-service",
    element: <SearchService />,
  },
  {
    path: "/post-service",
    element: <PostService />,
  },
 
];
