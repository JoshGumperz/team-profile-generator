const managerHtml = (data) =>
    `<div class="employee-container d-flex">
        <div class="employee">
            <div class="employee-header"><h3>${data.name}, ${data.position}</h3></div>
            <div class="employee-text">
                <p>ID: ${data.id}</p>
                <div class="d-flex flex-row"><p class="label-text">Email:</p><a href="mailto:${data.email}">${data.email}</a></div>
                <p>Office Number: ${data.officeNum}</p>
            </div>
        </div>
  </div>`

module.exports = managerHtml;