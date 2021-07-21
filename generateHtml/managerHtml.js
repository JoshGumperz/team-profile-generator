const managerHtml = (data) =>
    `<div class="employee-container d-flex">
        <div class="employee">
            <div class="employee-header"><h3>${data.name}, ${data.position}</h3></div>
            <div class="employee-text">
                <p>ID: ${data.id}</p>
                <a href="mailto:${data.email}"><span class="label-text">Email:</span> ${data.email}</p>
                <p>Office Number: ${data.officeNum}</p>
            </div>
        </div>
    </div>`

module.exports = managerHtml;