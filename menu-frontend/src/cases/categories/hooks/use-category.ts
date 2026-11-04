import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/spot.service";

export function useCategories() {
    return useQuery({queryKey: ['categories'], queryFn: () => CategoryService.listALL()})








}