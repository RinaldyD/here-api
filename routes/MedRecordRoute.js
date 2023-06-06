const express = require("express")
const {
    createMedRecord,
    getMedRecordByIdforHospital,
    getMedRecordforHospital,
    searchMedRecordforHospital,
    getMedRecordforPatient,
    getMedRecordByIdforPatient,
    updateMedRecord,
    deleteMedRecord
} = require("../controllers/MedRecord")
const { authHospital, authToken, authPatient } = require("../middleware/Auth")

const router = express.Router()

router.get('/medRecordforHospital', authToken, authHospital, getMedRecordforHospital)
router.post('/searchMedRecordforHospital', authToken, authHospital, searchMedRecordforHospital)
router.get('/medRecordforHospital/:id', authToken, authHospital, getMedRecordByIdforHospital)
router.get('/medRecordforPatient', authToken, authPatient, getMedRecordforPatient)
router.get('/medRecordforPatient/:id', authToken, authPatient, getMedRecordByIdforPatient)
router.post('/medRecord', authToken, authHospital, createMedRecord)
router.patch('/medRecord/:id', authToken, authHospital, updateMedRecord)
router.delete('/medRecord/:id', authToken, authHospital, deleteMedRecord)

module.exports = router