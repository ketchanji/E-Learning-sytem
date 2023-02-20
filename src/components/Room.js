import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomID } = useParams();
  console.log(roomID);

  const meeting = async (element) => {
    const appID = 1637138922;
    const serverSecret = "fabc41698b6fcfe72e16d57ce34545a2";

    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "AnnonemouseDev"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

  };
  return <div className="myCallContainer" ref={meeting} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Room;
