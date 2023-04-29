import Donation from "../models/funcs/Donation.js";

const donationService = {
  async readDonation(donation_id) {
    const donationInfo = await donation.find({
      donation_id,
      cost,
      support,
      donation_title,
      image_key,
    });
    return donationInfo;
  },

  async addDonation(user_id) {
    const newDonation = await donation.create({ newDonation });
    const data = {
      user_id,
      donation_id,
      cost,
      donation_title,
      donation_image_key,
      create_date,
      update_date,
    };
    return newDonation;
  },

  async readDonationList(user_id) {
    const donationList = await donation.find({
      donation_id,
      cost,
      create_date,
    });
    return donationList;
  },
};

export { donationService };
