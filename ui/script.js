window.addEventListener("message", (e) => {
  if (e.data.type === "SonoranCAD::civint:id") {
    if (e.data.show) {
      const fullName = e.data.fullName;
      const nameArray = fullName.split(" ");
      const firstName = nameArray[0];
      const lastName = nameArray[1];
      const playerID = e.data.playerID;
      const dob = e.data.dob;

      const html = `
        <div id="id-card">
          <div id="top-info">
            <h2 id="state-name">SAN ANDREAS</h2>
            <h2 id="top-id">IDENTIFICATION CARD</h2>
          </div>
          <div id="info-wrapper">
            <div id="id-photo">
              <img
                src="${e.data.img}"
                alt="PHOTO"
                id="id-pic"
              />
              <h2 id="signature">${fullName}</h2>
            </div>
            <div id="personal-info">
              <h2>
                <span class="info-text">LN</span>
                <span id="last-name">${lastName}</span>
              </h2>
              <h2>
                <span class="info-text">FN</span>
                <span id="first-name">${firstName}</span>
              </h2>
              <h2>
                <span class="info-text">DOB</span
                ><span class="number" id="dob"> ${dob}</span>
              </h2>
              <h2>
                <span class="info-text">PLAYER ID</span>
                <span class="number" id="player-id"> ${playerID}</span>
              </h2>
            </div>
          </div>
        </div>
`;

      document.querySelector("body").innerHTML = html;

      setTimeout(() => {
        document.querySelector("body").innerHTML = "";
      }, 6000);
    }
  }
});