export default function DateFromNow(string) {
  const dateOfSale = new Date(string)

  function timeSince() {
    const difference = Math.round((new Date() - dateOfSale) / 1000 / 60 / 60)

    return difference
  }

  // (difference / 1000 / 60 / 60) MINUTES
  // (difference - timestamp) / 1000 / 60 ) HOURS

  // function getRelativeTime(timestamp) {
  //   const rtf = new Intl.RelativeTimeFormat('en', {
  //     numeric: "auto",
  //     style: "short", // other values: "short" or "narrow"
  //   });
  //   const hoursDifference = Math.round(
  //     ((timestamp - new Date()) / 1000 / 60)
  //   );

  //   console.log(timestamp)
  //   console.log(new Date())

  //   return rtf.format(hoursDifference, 'minutes');
  // }

  return(
    `~${timeSince(dateOfSale)} hours ago`
  )
}