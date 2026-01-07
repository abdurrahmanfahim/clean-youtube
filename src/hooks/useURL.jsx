const useURL = (url) => {
  const playlistPrefix = "PL";

  if (url && url.startsWith(playlistPrefix) && !url.includes("http")) {
    return url;
  }

  if (url && url.includes("list=")) {
    const listParam = url.split("list=")[1];
    const playlistId = listParam.split("&")[0];
    return playlistId;
  }

  return url;
};

export default useURL;

// ====================================
// MY OLD LOGIC WAS:

// const useURL = (url) => {
//   const playlistLetter = "PL";
//   if (url && !url.startsWith(playlistLetter)) {
//     const startIndex = url.indexOf(playlistLetter);
//     const endIndex = url.indexOf("&", startIndex);

//     let cropped;
//     if (endIndex === -1) {
//       cropped = url.slice(startIndex);
//     } else {
//       cropped = url.slice(startIndex, endIndex);
//     }

//     return cropped;
//   }
// };
