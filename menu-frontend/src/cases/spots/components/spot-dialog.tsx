
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { useSpots } from "../hooks/use-hook";
import type { SpotDTO } from "../dtos/spot.dto";
import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";

interface SpotDialogProps {
  open: boolean;
  onSelect: (spot: SpotDTO) => void;
  selectedSpotId?: string;
}

export function SpotDialog({
  open,
  onSelect,
  selectedSpotId
}: SpotDialogProps) {

  const { data: spots = [] } = useSpots();

  return (
    <Dialog open={open}>
      <DialogContent>
        <div className="grid grid-cols-2 gap-4">
          {spots.map((spot) => (
            <Button
              key={spot.id}
              variant="outline"
              className={cn(
                "h-auto min-h-20 flex-col p-4",
                spot.id === selectedSpotId &&
                  "border-primary bg-accent text-primary-foreground"
              )}
              onClick={() => onSelect(spot)}
            >
              <MapPin className="size-6" />
              {spot.name}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
