const engineerHtml = (data) => 
    `<div class="employee-container d-flex">
        <div class="employee">
            <div class="employee-header"><h3>${data.name}, ${data.position}</h3></div>
            <div class="employee-text">
                <p>ID: ${data.id}</p>
                <div class="d-flex flex-row"><p class="label-text">Email:</p><a href="mailto:${data.email}">${data.email}</a></div>
                <div class="d-flex flex-row"><p class="label-text">Github:</p><a href="https://github.com/${data.github}">${data.github}</a></div>
            </div>
        </div>
  </div>`

module.exports = engineerHtml;