const engineerHtml = (data) => 
    `<div class="employee-container d-flex">
        <div class="employee">
            <div class="employee-header"><h3>${data.name}, ${data.position}</h3></div>
            <div class="employee-text">
                <p>ID: ${data.id}</p>
                <a href="mailto:${data.email}"><span class="label-text">Email:</span> ${data.email}</p>
                <a href="https://github.com/${data.github}"><span class="label-text">Github:</span> ${data.github}</p>
            </div>
        </div>
  </div>`

module.exports = engineerHtml;