const generateHtml = (data) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style.css">
    <title>Test</title>
</head>
<body>
  <header class="jumbotron d-flex flex-column align-items-center">
    <h1 class="display-3">My Team</h1>
  </header>
  <main class="main-content d-flex">
    <div class="employee-container d-flex">
      <div class="employee">
        <div class="employee-header"><h3>${data.name}, ${data.position}</h3></div>
        <div class="employee-text">
          <p>ID: ${data.id}</p>
          <p>Email: ${data.email}</p>
          <p>Office number: ${data.officeNum}</pd>
        </div>
      </div>
   </div>
  </main>
</body>
</html>
`;

module.exports = generateHtml;
