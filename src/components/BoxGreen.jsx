import useWindowDimensions from "./useWindowDimentions";

export default function BoxGreen(props) {
  const x = 50;
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        position: "absolute",
        width: x,
        height: x,
        backgroundColor: "green",
        border: "5px solid green",
        padding: "0px",
        left: width / 2 - x,
        top: height / 2 + x
      }}
    ></div>
  );
}
