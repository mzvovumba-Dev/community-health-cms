// ===========================
// COMMUNITY HEALTH CLINIC CMS
// app.js - Main JavaScript File
// WA0106
// ===========================

// ---- APPOINTMENTS ----

let editingApptRow = null;

function addAppointment() {
  const patient = document.getElementById("patientName").value;
  const doctor = document.getElementById("doctorName").value;
  const date = document.getElementById("apptDate").value;
  const time = document.getElementById("apptTime").value;

  if (!patient || !doctor || !date || !time) {
    alert("Please fill in all fields!");
    return;
  }

  const table = document.querySelector("#appointmentsTable tbody");

  if (editingApptRow) {
    // UPDATE existing row
    editingApptRow.cells[1].innerText = patient;
    editingApptRow.cells[2].innerText = doctor;
    editingApptRow.cells[3].innerText = date;
    editingApptRow.cells[4].innerText = time;
    editingApptRow = null;
    document.getElementById("apptModalTitle").innerText = "New Appointment";
  } else {
    // ADD new row
    const rowCount = table.rows.length + 1;
    const newRow = `
      <tr>
        <td>A00${rowCount}</td>
        <td>${patient}</td>
        <td>${doctor}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td><span class="badge bg-warning text-dark">Pending</span></td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editAppointment(this)">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="cancelAppointment(this)">Cancel</button>
        </td>
      </tr>`;
    table.innerHTML += newRow;
  }

  closeApptModal();
}

function editAppointment(button) {
  const row = button.closest("tr");
  editingApptRow = row;

  document.getElementById("patientName").value = row.cells[1].innerText;
  document.getElementById("doctorName").value = row.cells[2].innerText;
  document.getElementById("apptDate").value = row.cells[3].innerText;
  document.getElementById("apptTime").value = row.cells[4].innerText;
  document.getElementById("apptModalTitle").innerText = "Edit Appointment";

  document.getElementById("newAppointmentModal").style.display = "flex";
}

function cancelAppointment(button) {
  const row = button.closest("tr");
  row.remove();
}

function closeApptModal() {
  document.getElementById("newAppointmentModal").style.display = "none";
  document.getElementById("patientName").value = "";
  document.getElementById("doctorName").value = "";
  document.getElementById("apptDate").value = "";
  document.getElementById("apptTime").value = "";
  editingApptRow = null;
  document.getElementById("apptModalTitle").innerText = "New Appointment";
}

// ---- PATIENTS ----

let editingRow = null;

function addPatient() {
  const name = document.getElementById("patientFullName").value;
  const dob = document.getElementById("patientDOB").value;
  const gender = document.getElementById("patientGender").value;
  const phone = document.getElementById("patientPhone").value;

  if (!name || !dob || !gender || !phone) {
    alert("Please fill in all fields!");
    return;
  }

  const table = document.querySelector("#patientsTable tbody");

  if (editingRow) {
    // UPDATE existing row
    editingRow.cells[1].innerText = name;
    editingRow.cells[2].innerText = dob;
    editingRow.cells[3].innerText = gender;
    editingRow.cells[4].innerText = phone;
    editingRow = null;
    document.getElementById("modalTitle").innerText = "Add New Patient";
  } else {
    // ADD new row
    const rowCount = table.rows.length + 1;
    const newRow = `
      <tr>
        <td>00${rowCount}</td>
        <td>${name}</td>
        <td>${dob}</td>
        <td>${gender}</td>
        <td>${phone}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editPatient(this)">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deletePatient(this)">Delete</button>
        </td>
      </tr>`;
    table.innerHTML += newRow;
    document.getElementById("totalPatients").innerText = table.rows.length;
  }

  closePatientModal();
}

function editPatient(button) {
  const row = button.closest("tr");
  editingRow = row;

  document.getElementById("patientFullName").value = row.cells[1].innerText;
  document.getElementById("patientDOB").value = row.cells[2].innerText;
  document.getElementById("patientGender").value = row.cells[3].innerText;
  document.getElementById("patientPhone").value = row.cells[4].innerText;
  document.getElementById("modalTitle").innerText = "Edit Patient";

  document.getElementById("addPatientModal").style.display = "flex";
}

function deletePatient(button) {
  const row = button.closest("tr");
  row.remove();
  const table = document.querySelector("#patientsTable tbody");
  document.getElementById("totalPatients").innerText = table.rows.length;
}

function closePatientModal() {
  document.getElementById("addPatientModal").style.display = "none";
  document.getElementById("patientFullName").value = "";
  document.getElementById("patientDOB").value = "";
  document.getElementById("patientGender").value = "";
  document.getElementById("patientPhone").value = "";
  editingRow = null;
  document.getElementById("modalTitle").innerText = "Add New Patient";
}

// ---- MEDICAL RECORDS ----

let editingRecordRow = null;

function addRecord() {
  const patient = document.getElementById("recordPatient").value;
  const diagnosis = document.getElementById("recordDiagnosis").value;
  const treatment = document.getElementById("recordTreatment").value;
  const date = document.getElementById("recordDate").value;

  if (!patient || !diagnosis || !treatment || !date) {
    alert("Please fill in all fields!");
    return;
  }

  const table = document.querySelector("#recordsTable tbody");

  if (editingRecordRow) {
    editingRecordRow.cells[1].innerText = patient;
    editingRecordRow.cells[2].innerText = diagnosis;
    editingRecordRow.cells[3].innerText = treatment;
    editingRecordRow.cells[4].innerText = date;
    editingRecordRow = null;
    document.getElementById("recordModalTitle").innerText = "Add Medical Record";
  } else {
    const rowCount = table.rows.length + 1;
    const newRow = `
      <tr>
        <td>R00${rowCount}</td>
        <td>${patient}</td>
        <td>${diagnosis}</td>
        <td>${treatment}</td>
        <td>${date}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editRecord(this)">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteRecord(this)">Delete</button>
        </td>
      </tr>`;
    table.innerHTML += newRow;
  }

  closeRecordModal();
}

function editRecord(button) {
  const row = button.closest("tr");
  editingRecordRow = row;

  document.getElementById("recordPatient").value = row.cells[1].innerText;
  document.getElementById("recordDiagnosis").value = row.cells[2].innerText;
  document.getElementById("recordTreatment").value = row.cells[3].innerText;
  document.getElementById("recordDate").value = row.cells[4].innerText;
  document.getElementById("recordModalTitle").innerText = "Edit Medical Record";

  document.getElementById("addRecordModal").style.display = "flex";
}

function deleteRecord(button) {
  const row = button.closest("tr");
  row.remove();
}

function closeRecordModal() {
  document.getElementById("addRecordModal").style.display = "none";
  document.getElementById("recordPatient").value = "";
  document.getElementById("recordDiagnosis").value = "";
  document.getElementById("recordTreatment").value = "";
  document.getElementById("recordDate").value = "";
  editingRecordRow = null;
  document.getElementById("recordModalTitle").innerText = "Add Medical Record";
}

// ---- STAFF ----

let editingStaffRow = null;

function addStaff() {
  const name = document.getElementById("staffName").value;
  const role = document.getElementById("staffRole").value;
  const department = document.getElementById("staffDepartment").value;
  const phone = document.getElementById("staffPhone").value;

  if (!name || !role || !department || !phone) {
    alert("Please fill in all fields!");
    return;
  }

  const table = document.querySelector("#staffTable tbody");

  if (editingStaffRow) {
    editingStaffRow.cells[1].innerText = name;
    editingStaffRow.cells[2].innerText = role;
    editingStaffRow.cells[3].innerText = department;
    editingStaffRow.cells[4].innerText = phone;
    editingStaffRow = null;
    document.getElementById("staffModalTitle").innerText = "Add Staff Member";
  } else {
    const rowCount = table.rows.length + 1;
    const newRow = `
      <tr>
        <td>S00${rowCount}</td>
        <td>${name}</td>
        <td>${role}</td>
        <td>${department}</td>
        <td>${phone}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editStaff(this)">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteStaff(this)">Delete</button>
        </td>
      </tr>`;
    table.innerHTML += newRow;
  }

  closeStaffModal();
}

function editStaff(button) {
  const row = button.closest("tr");
  editingStaffRow = row;

  document.getElementById("staffName").value = row.cells[1].innerText;
  document.getElementById("staffRole").value = row.cells[2].innerText;
  document.getElementById("staffDepartment").value = row.cells[3].innerText;
  document.getElementById("staffPhone").value = row.cells[4].innerText;
  document.getElementById("staffModalTitle").innerText = "Edit Staff Member";

  document.getElementById("addStaffModal").style.display = "flex";
}

function deleteStaff(button) {
  const row = button.closest("tr");
  row.remove();
}

function closeStaffModal() {
  document.getElementById("addStaffModal").style.display = "none";
  document.getElementById("staffName").value = "";
  document.getElementById("staffRole").value = "";
  document.getElementById("staffDepartment").value = "";
  document.getElementById("staffPhone").value = "";
  editingStaffRow = null;
  document.getElementById("staffModalTitle").innerText = "Add Staff Member";
}