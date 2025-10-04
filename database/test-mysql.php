<?php
try {
    // For Homebrew MySQL
    $pdo = new PDO("mysql:host=localhost;dbname=office_of_the_dead;charset=utf8mb4", "root", "your_password");
    
    // For MAMP
    // $pdo = new PDO("mysql:host=localhost:8889;dbname=office_of_the_dead;charset=utf8mb4", "root", "root");
    
    echo "✅ Database connection successful!\n";
    
    // Test table exists
    $stmt = $pdo->query("SHOW TABLES LIKE 'prayer_commissions'");
    if ($stmt->rowCount() > 0) {
        echo "✅ Table 'prayer_commissions' exists!\n";
    } else {
        echo "❌ Table 'prayer_commissions' not found. Run setup.sql\n";
    }
    
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage() . "\n";
}
?>