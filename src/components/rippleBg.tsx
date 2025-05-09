import {
  Ripple
} from "@/components/ui/ripple";

export default function RippleComp() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Ripple
        mainCircleSize={400}
        numCircles={10}
        />
    </div>
  )
}