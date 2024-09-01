import { useSnapshot } from "valtio";
import { SketchPicker } from "react-color";

import state from "../store";

export default function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#ccc",
          "#efbd4e",
          "#80c670",
          "#726de8",
          "#353934",
          "#2ccce4",
          "#ff8a65",
          "#7098da",
          "#c19277",
          "#ff95ad",
          "#512314",
          "#5f123d",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
}
