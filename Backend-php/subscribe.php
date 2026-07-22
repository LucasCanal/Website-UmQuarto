<?php
// subscribe.php
// Endpoint que recebe um email e cadastra na lista da Brevo.
// Equivalente ao endpoint POST /subscribe do backend Express original.

header("Access-Control-Allow-Origin: *"); // se quiser, troque * pelo domínio do seu site
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Responde rápido a requisições de preflight (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Carrega a config com a API key, que fica FORA do public_html
//
// TESTE LOCAL (ativo agora):
$config = require_once("/Volumes/canal hd/Meus projetos/Website-UmQuarto/Website-UmQuarto/config.php");
//
// PRODUÇÃO (HostGator) - quando for subir, comente a linha acima e
// descomente a linha abaixo, trocando "seuusuario" pelo seu usuário do cPanel:
// $config = require_once("/home/seuusuario/config.php");

$apiKey = $config["BREVO_API_KEY"] ?? null;

if (!$apiKey) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Configuração ausente"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"] ?? null;

if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Email inválido"]);
    exit;
}

$ch = curl_init("https://api.brevo.com/v3/contacts");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "api-key: $apiKey"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "email" => $email,
    "listIds" => [2],
    "updateEnabled" => true
]));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro de conexão"]);
    exit;
}

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Não foi possível cadastrar o email"]);
}
