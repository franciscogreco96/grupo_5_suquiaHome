const express = require("express");
const router = express.Router();

/*  controler require */
const userApiController = require("../../controllers/api/userApiController");

/* LISTADO USUARIOS */
router.get("/", userApiController.list);

/* DETALLE USUARIO */
router.get("/userDetail/:id", userApiController.detail);

module.exports = router;