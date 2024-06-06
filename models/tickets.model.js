const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    event: { type: String, required: [true, "Event is required"] },
    number: { type: String, required: [true, "Number is required"] },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
