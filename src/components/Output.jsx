import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Output = () => {
  return (
    <div className="outputArea">
      <div className="head">
        <span>Output</span>
        <PlayCircleFilledWhiteIcon
          style={{
            color: "#00aff0",
            background: "#fff",
            padding: 5,
            borderRadius: "20px",
            alignItems: "center",
          }}
        />
      </div>
      <iframe id="output"></iframe>
    </div>
  );
};

export default Output;
