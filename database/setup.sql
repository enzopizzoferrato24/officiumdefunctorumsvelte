-- Database setup for Office of the Dead Prayer Commissions
-- Run this SQL to create the database and table

CREATE DATABASE IF NOT EXISTS office_of_the_dead 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE office_of_the_dead;

-- Create prayer commissions table
CREATE TABLE IF NOT EXISTS prayer_commissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    newsletter BOOLEAN DEFAULT FALSE,
    amount DECIMAL(10,2) DEFAULT 10.00,
    intentions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed BOOLEAN DEFAULT FALSE,
    processed_at TIMESTAMP NULL,
    notes TEXT,
    
    -- Indexes for better performance
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_processed (processed)
);

-- Create admin user (optional - replace with your preferred credentials)
-- CREATE USER 'office_admin'@'localhost' IDENTIFIED BY 'secure_password_here';
-- GRANT SELECT, INSERT, UPDATE ON office_of_the_dead.* TO 'office_admin'@'localhost';
-- FLUSH PRIVILEGES;

-- Sample query to view all commissions
-- SELECT 
--     id,
--     CONCAT(first_name, ' ', last_name) as full_name,
--     email,
--     amount,
--     newsletter,
--     intentions,
--     created_at,
--     processed
-- FROM prayer_commissions 
-- ORDER BY created_at DESC;
