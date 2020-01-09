const testEvent = {
  name: "Bootcamp",
  description: "Only the strong surive",
  location: 1,
  start_datetime: "2020-02-25 14:00:00 -0400",
  end_datetime: "2020-02-25 20:00:00 -0400",
  rsvp_link: "test.test.test/rsvp",
  media_link: "devc/seminars"
};
const testNullEvent = {
  //null name
  description: "A great way to get you started",
  location: 1,
  start_datetime: "2020-02-25 14:00:00 -0400",
  end_datetime: "2020-02-25 20:00:00 -0400",
  rsvp_link: "test.test.test/rsvp",
  media_link: "devc/seminars"
};

const testLocation = {
  venue: "Foxies",
  country: "Kenya",
  city: "Nairobi",
  street: "Woodley Grove"
};

const testNullLocation = {
  //null venue
  country: "Kenya",
  city: "Nairobi",
  street: "Woodley Grove"
};
export { testEvent, testNullEvent, testLocation, testNullLocation };
