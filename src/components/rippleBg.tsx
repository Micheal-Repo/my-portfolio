import {
  Ripple
} from "@/components/ui/ripple";

export default function RippleComp() {
  return (
    <div className="absolute inset-0">
      <Ripple
        mainCircleSize={800}
        numCircles={8}
        />
    </div>
  )
}