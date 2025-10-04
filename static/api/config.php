<?php
// Database configuration
// Copy this file to config.php and update with your actual database credentials

return [
    'database' => [
        'host' => 'localhost',
        'dbname' => 'office_of_the_dead',
        'username' => 'enzo',
        'password' => 'Tisthec24!',
        'charset' => 'utf8mb4'
    ],
    
    'email' => [
        'notification_email' => 'canticumsalomonis@gmail.com',
        'from_email' => 'noreply@yourdomain.com',
        'from_name' => 'Office of the Dead'
    ],
    
    'settings' => [
        'min_amount' => 10,
        'default_amount' => 10,
        'enable_email_notifications' => true
    ]
];
?>
