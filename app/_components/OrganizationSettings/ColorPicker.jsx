import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function ColorPickerGfg({ setColor, color}) {

  return (
    <div>
      <h1 className="text-xs not-italic font-hairline leading-4">Pick your brand colour</h1>
      <ColorPicker
        width={256}
        height={168}
        color={color}
        onChange={setColor}
        hideHSV
        dark
      />
    </div>
  );
}
