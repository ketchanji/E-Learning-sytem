import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Nav } from "./components/NavBar";
import { Footer } from "./components/Footer";


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}


const Room = () => {
  // const { roomID } = useParams();
  const roomID = getUrlParams().get('roomID') || randomID(5);
  console.log(roomID);

  
  const meeting = async (element) => {
    const appID = 63155485;
    const serverSecret = "9a6ca59cb833b3d27ae194dd65495cb7";


    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Enter User Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <section>
    <Nav />
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: "100vw", height: "100vh" }}></div>
      <Footer />
      </section>
  );
};

export default Room;

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("roomID");
