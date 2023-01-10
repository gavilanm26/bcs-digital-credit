const fs = require("fs");
export function getChannelsData(callback) {
  fs.readFile("C:/Users/GAVILAN/AquaProjects/bcs-credito-digital/src/models/channelsData.ts", "utf8", (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    const channelsData = JSON.parse(data);
    callback(channelsData);
  });
}