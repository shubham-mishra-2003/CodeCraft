import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

const Input = () => {
  const run = () => {
    let htmlCode = document.getElementById("html").value;
    let cssCode = document.getElementById("css").value;
    let jsCode = document.getElementById("js").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
  };

  return (
    <div className="inputArea">
      <div className="input" id="htmlinput">
        <div className="head">
          <span>HTML</span>
          <HtmlIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              padding: 5,
              borderRadius: "20px",
            }}
          />
        </div>
        <textarea
          id="html"
          placeholder="Type your HTML Code here"
          onKeyUp={run}
        ></textarea>
      </div>
      <div className="input" id="cssinput">
        <div className="head">
          <span>CSS</span>
          <CssIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              padding: 5,
              borderRadius: "20px",
            }}
          />
        </div>
        <textarea
          id="css"
          placeholder="Type your CSS Code here"
          onKeyUp={run}
        ></textarea>
      </div>
      <div className="input" id="jsinput">
        <div className="head">
          <span>JS</span>
          <JavascriptIcon
            style={{
              color: "#00aff0",
              background: "#fff",
              padding: 5,
              borderRadius: "20px",
            }}
          />
        </div>
        <textarea
          id="js"
          placeholder="Type your JavaScript Code here"
          onKeyUp={run}
        ></textarea>
      </div>
    </div>
  );
};

export default Input;
