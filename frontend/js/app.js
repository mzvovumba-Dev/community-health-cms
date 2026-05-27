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