<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database configuration
$host = 'localhost';
$dbname = 'office_of_the_dead';
$username = 'your_db_username';
$password = 'your_db_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input or form data
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input) {
        $input = $_POST;
    }
    
    // Validate required fields
    $firstName = trim($input['firstName'] ?? '');
    $lastName = trim($input['lastName'] ?? '');
    $email = trim($input['email'] ?? '');
    
    if (empty($firstName) || empty($lastName) || empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'First name, last name, and email are required']);
        exit();
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format']);
        exit();
    }
    
    // Sanitize and prepare data
    $newsletter = isset($input['newsletter']) && $input['newsletter'] ? 1 : 0;
    $amount = floatval($input['amount'] ?? 10);
    $intentions = trim($input['intentions'] ?? '');
    
    // Ensure minimum amount
    if ($amount < 10) {
        $amount = 10;
    }
    
    try {
        // Insert into database
        $stmt = $pdo->prepare("
            INSERT INTO prayer_commissions 
            (first_name, last_name, email, newsletter, amount, intentions, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, NOW())
        ");
        
        $stmt->execute([
            $firstName,
            $lastName,
            $email,
            $newsletter,
            $amount,
            $intentions
        ]);
        
        $commissionId = $pdo->lastInsertId();
        
        // Send notification email (optional)
        $subject = "New Prayer Commission Request #$commissionId";
        $message = "New commission prayer request received:\n\n";
        $message .= "Name: $firstName $lastName\n";
        $message .= "Email: $email\n";
        $message .= "Amount: $$amount per Office\n";
        $message .= "Newsletter: " . ($newsletter ? 'Yes' : 'No') . "\n";
        $message .= "Intentions: $intentions\n";
        $message .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
        
        // Replace with your notification email
        $notificationEmail = 'canticumsalomonis@gmail.com';
        mail($notificationEmail, $subject, $message, "From: noreply@yourdomain.com");
        
        // Return success response
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Commission request submitted successfully',
            'id' => $commissionId
        ]);
        
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save commission request']);
        error_log("Database error: " . $e->getMessage());
    }
    
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
