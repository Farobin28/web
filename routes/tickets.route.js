const express = require("express");
const Ticket = require("../models/tickets.model.js");
const router = express.Router();

const {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/tickets.controller.js");

router.get("/", getTickets);

router.get("/:id", getTicket);

router.post("/", createTicket);

router.put("/:id", updateTicket);

router.delete("/:id", deleteTicket);

module.exports = router;
