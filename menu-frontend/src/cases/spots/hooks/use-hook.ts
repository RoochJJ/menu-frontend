import { SpotService } from "../services/spot.service";
import { useQuery} from "@tanstack/react-query";

export function useSpots(){
    return useQuery({
        queryKey: ['spots'],
        queryFn: SpotService.listALL
    });
}

