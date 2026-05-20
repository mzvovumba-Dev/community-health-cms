-- ============================================
-- Community Health Clinic Management System
-- Database Creation Script
-- WA0102 - SE0101
-- Author: [Your Name]
-- Date: 20 May 2026
-- ============================================

-- Create and select the database
CREATE DATABASE IF NOT EXISTS clinic_db;
USE clinic_db;

-- ============================================
-- TABLE: patients
-- ============================================
CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) NOT NULL,
    phone VARCHAR(15),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABLE: staff
-- ============================================
CREATE TABLE staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    phone VARCHAR(15),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABLE: appointments
-- ============================================
CREATE TABLE appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    staff_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'Pending',
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);

-- ============================================
-- TABLE: medical_records
-- ============================================
CREATE TABLE medical_records (
    record_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    staff_id INT NOT NULL,
    visit_date DATE NOT NULL,
    diagnosis VARCHAR(255),
    prescription TEXT,
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);

-- ============================================
-- TABLE: users
-- ============================================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    staff_id INT NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'staff',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);

-- ============================================
-- SAMPLE DATA: patients
-- ============================================
INSERT INTO patients (full_name, date_of_birth, gender, phone, address)
VALUES
('Thandiwe Mokoena', '1990-03-15', 'Female', '0712345678', 'Soweto, Johannesburg'),
('Sipho Dlamini', '1985-07-22', 'Male', '0823456789', 'Mamelodi, Pretoria'),
('Nomvula Khumalo', '2000-11-05', 'Female', '0634567890', 'Tembisa, Ekurhuleni');

-- ============================================
-- SAMPLE DATA: staff
-- ============================================
INSERT INTO staff (full_name, role, phone, email)
VALUES
('Dr. Fatima Patel', 'Doctor', '0111234567', 'fatima@clinic.co.za'),
('Nurse Bongani Zulu', 'Nurse', '0112345678', 'bongani@clinic.co.za'),
('Lerato Sithole', 'Receptionist', '0113456789', 'lerato@clinic.co.za');