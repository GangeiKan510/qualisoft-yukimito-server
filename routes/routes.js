"use strict";

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
  storage: multer.memoryStorage()
});
var petOwnerController = require("../controllers/petOwnerController");
var adminController = require("../controllers/adminController");
var petController = require("../controllers/petController");
var bookingController = require("../controllers/bookingController");
var vaccineController = require("../controllers/vaccineController");
var uploadController = require("../controllers/uploadController");
//const serviceController = require("../controllers/serviceController");

router.post("/api/upload", upload.single('filename'), uploadController.uploadPhoto);
router.post("/api/auth/signup/petowner", petOwnerController.signup);
router.post("/api/auth/signin/petowner", petOwnerController.signin);
router.get("/api/auth/getPetOwner/:petOwnerId", petOwnerController.getPetOwner);
router.get("/api/auth/getAllPetOwners/", petOwnerController.getAllPetOwners);
router.put("/api/auth/editProfile/petowner/:petOwnerId", petOwnerController.updateProfile);
router.put("/api/auth/uploadProfilePicture/:petOwnerId", upload.single('filename'), petOwnerController.addProfilePicture);
router.post("/api/auth/signup/admin", adminController.signup);
router.get("/api/admin/getAllAdmin", adminController.getAllAdmins);
router.post("/api/auth/signin/admin", adminController.signin);
router.put("/api/admin/booking/accept/:id", adminController.acceptBooking);
router.put("/api/admin/booking/reject/:id", adminController.rejectBooking);
router.put("/api/admin/adminAccountManagement/:id", adminController.updateRole);
router.get("/api/getAllPets", petController.getAllPets);
router.get("/api/getPets/pet/:petOwnerId", petController.getAllPetsOfPetOwner);
router.post("/api/addPet/pet", upload.single('filename'), petController.createPet);
router.get("/api/getPet/:petId", petController.getPet);
router.put("/api/pet/approveVaccinationRecord/:petId", petController.approvePetVaccine);
router.put("/api/pet/updatePet/:petId", petController.updatePet);
router.put("/api/pet/uploadPetProfile/:petId", upload.single('petProfilePhoto'), petController.uploadPetProfile);
router["delete"]("/api/deletePet/:petOwnerId/:petId", petController.deletePet);
router.post("/api/createHomeCareBooking", bookingController.createHomeCareBooking);
router.post("/api/createErrandsCareBooking", bookingController.createErrandsCareBooking);
router["delete"]("/api/cancelBooking/:petOwnerId/:bookingId", bookingController.cancelBooking);
router.post("/api/createDayCareBooking", bookingController.createDayCareBooking);
router.get("/api/getBooking/:petOwnerId", bookingController.getBooking);
router.get("/api/getAllBookings", bookingController.getAllBookings);
router.put("/api/updateBooking/:bookingId", bookingController.updateBooking);
router.post("/api/addVaccine", vaccineController.createVaccine);
router.get("/api/getVaccine/:id", vaccineController.findVaccineById);
router.get("/api/getAllVaccines", vaccineController.findAllVaccines);
router.put("/api/updateVaccine/:id", vaccineController.updateVaccine);
router["delete"]("/api/deleteVaccine/:id", vaccineController.deleteVaccine);

// router.post("/api/addService", serviceController.createService);
// router.get("/api/getService/:serviceId", serviceController.getService);
// router.put("/api/updateService/:serviceId", serviceController.updateService);
module.exports = router;