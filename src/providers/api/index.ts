import service from "@/services/core";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";
import {
  AddProps,
  AddResponse,
  DeleteProps,
  DeleteResponse,
  ListResponse,
  UpdateProps,
  UpdateResponse,
} from "./types";

export const useTasksList = () => {
  const data: UseQueryResult<ListResponse> = useQuery({
    queryKey: "sampleList",
    queryFn: () => service({ url: "/tasks", method: "GET" }),
  });
  return data;
};

export const useTaskAdd = (): UseMutationResult<AddResponse, {}, AddProps> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "addSample",
    mutationFn: (props) =>
      service({ url: "/tasks", method: "POST", body: props }),
    onSuccess: () => {
      queryClient.invalidateQueries("sampleList");
    },
  });
};

export const useTaskDelete = (): UseMutationResult<
  DeleteResponse,
  {},
  DeleteProps
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "addSample",
    mutationFn: (props) =>
      service({ url: "/tasks/" + props.id, method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries("sampleList");
    },
  });
};

export const useTaskUpdate = (): UseMutationResult<
  UpdateResponse,
  {},
  UpdateProps
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "addSample",
    mutationFn: (props) =>
      service({
        url: "/tasks/" + props.id,
        method: "PATCH",
        body: { task: props.task },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries("sampleList");
    },
  });
};
