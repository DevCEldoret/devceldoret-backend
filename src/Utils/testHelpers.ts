export const testEvent = {
  name: "testEvent",
  description: "testDescription",
  location: 1,
  start_datetime: "2020-02-25 14:00:00 -0400",
  end_datetime: "2020-02-25 20:00:00 -0400",
  rsvp_link: "test.test.test/rsvp",
  media_link: "test/testLink"
};
export const testNullEvent = {
  //null name
  description: "testDescription",
  location: 1,
  start_datetime: "2020-02-25 14:00:00 -0400",
  end_datetime: "2020-02-25 20:00:00 -0400",
  rsvp_link: "test.test.test/rsvp",
  media_link: "test/testLink"
};

export const testLocation = {
  venue: "testVenue",
  country: "testCountry",
  city: "testCity",
  street: "testStreet"
};

export const testRole = {
  roleName: "testRole"
};

export const testNullRole = {
  //null roleName value
};

export const testNullLocation = {
  //null venue
  country: "testCountry",
  city: "testCity",
  street: "testStreet"
};

export const testUser = {
  firstName: "testFirstName",
  lastName: "testLastName",
  email: "test@test.test",
  password: "test123456",
  role: 1
};

export const testUserUpdate = {
  firstName: "testFirstNameUpdate",
  lastName: "testLastNameUpdate",
  email: "testUpdate@test.test",
  password: "testUpdate123",
  role: 1
};

export const existingUser = {
  firstName: "testFirstName",
  lastName: "testLastName",
  email: "test@test.test",
  password: "test123456",
  role: 1
};
