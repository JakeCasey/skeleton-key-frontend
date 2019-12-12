import { prodEndPoint, endpoint } from "../../config";
// import fetch from 'isomorphic-fetch';

//fucky stuff going on here
export default async (req, res) => {
  try {
    var newEndpoint =
      process.env.NODE_ENV === "production" ? prodEndPoint : endpoint;
    var url = req.url;
    var fetchUrl = newEndpoint + url;

    var fetchRes = await fetch(fetchUrl);
    const contentType = fetchRes.headers.get("content-type");

    let response;
    // if (contentType.includes('text/html')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/html');
    // }
    // if (contentType.includes('text/css')) {
    //   response = await fetchRes.text();
    //   res.setHeader('Content-Type', 'text/css');
    // }
    // if (contentType.includes('image/png')) {
    //   response = fetchRes.text();
    //   res.setHeader('Content-Type', 'image/png');
    // }

    res.setHeader("Content-Type", contentType);

    if (contentType.includes("image/jpeg")) {
      try {
        response = await fetchRes.buffer();
      } catch (error) {
        if (error) console.log(error);
      }
      res.end(response, "binary");
      return;
    }

    if (contentType.includes("image/png")) {
      try {
        response = await fetchRes.buffer();
      } catch (error) {
        if (error) console.log(error);
      }
      res.end(response, "binary");
      return;
    }

    response = await fetchRes.text();
    res.send(response);
  } catch (error) {
    // if (error) throw new Error(error);
  }
};
