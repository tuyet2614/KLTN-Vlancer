
import type { RouteObject } from "react-router-dom";
import SearchService from "..";
import DetailService from "../component/detailService";
import ListService from "../component/listService";
import PostService from "../component/postService";
export const RoutesSearchService = {
  SEARCH_SERVICE_ROUTE: "/search-service",
    POST_SERVICE_ROUTE: "/post-service",
    LIST_SERVICE_ROUTE: (cateId: string) => "/list-service/" + cateId,
    DETAIL_SERVICE_ROUTE: (cateId: string) => "/list-service/detail/" + cateId
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
  {
    path: "/list-service/:id",
    element: <ListService />,
  },
  {
    path: "/list-service/detail/:id",
    element: <DetailService />,
  },
 
];
