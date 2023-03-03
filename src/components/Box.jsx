import useWindowDimensions from "./useWindowDimentions";

export default function BoxRed(props) {
  const x = 50;
  const xValue = "50px";
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: xValue,
          height: xValue,
          backgroundColor: "red",
          margin: "0px",
          padding: "0px",
          left: width / 2 - x / 2,
          top: height / 2 - x
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: xValue,
          height: xValue,
          backgroundColor: "green",
          margin: "0px",
          padding: "0px",
          left: width / 2 - x,
          top: height / 2
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: xValue,
          height: xValue,
          backgroundColor: "blue",
          margin: "0px",
          padding: "0px",
          left: width / 2,
          top: height / 2
        }}
      ></div>
    </>
  );
}
