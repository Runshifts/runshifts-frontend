import QRCode from "react-qr-code";

function QRCodePage() {
  return (
    <div id="Container">
      <QRCode value="hey" />
      {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"hey"}
          viewBox={`0 0 256 256`}
        />
      </div> */}
    </div>
  );
}

export default QRCodePage;