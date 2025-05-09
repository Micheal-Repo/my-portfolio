import {
  Ripple
} from "@/components/ui/ripple";

export default function Ripple() {
  return (
    <div className="absolute inset-0">
      <Ripple
        mainCircleSize={400},
        numCircles={8},
        />
    </div>
  )
}