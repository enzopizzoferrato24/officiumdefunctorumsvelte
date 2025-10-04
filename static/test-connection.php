<?php
echo "<h2>Testing Database Connection</h2>";

// MAMP settings
$host = 'localhost:8889';
$dbname = 'office_of_the_dead';
$username = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    echo "<p>✅ Database connection successful!</p>";
    
    // Check if table exists
    $stmt = $pdo->query("SHOW TABLES LIKE 'prayer_commissions'");
    if ($stmt->rowCount() > 0) {
        echo "<p>✅ Table 'prayer_commissions' found!</p>";
        
        // Count records
        $stmt = $pdo->query("SELECT COUNT(*) as count FROM prayer_commissions");
        $count = $stmt->fetch(PDO::FETCH_ASSOC);
        echo "<p>📊 Records in table: {$count['count']}</p>";
    } else {
        echo "<p>❌ Table 'prayer_commissions' not found!</p>";
    }
    
} catch (PDOException $e) {
    echo "<p>❌ Connection failed: " . $e->getMessage() . "</p>";
}
?>
