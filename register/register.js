let participantCount = 1; // Initialize the participant count to 1

document.addEventListener("DOMContentLoaded", () => {
    const addParticipantButton = document.getElementById("add");
    const participantsFieldset = document.querySelector("fieldset.participants");
    const fullForm = document.getElementById("form");

    addParticipantButton.addEventListener("click", () => {
        participantCount += 1; // Increment the participant count
        const newParticipantHTML = participantTemplate(participantCount);

        // Create a new div element to hold the new participant HTML
        const newParticipantDiv = document.createElement("div");
        newParticipantDiv.innerHTML = newParticipantHTML;

        // Insert the new participant section before the add button
        participantsFieldset.insertBefore(newParticipantDiv, addParticipantButton);
    });

    fullForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let totalFees = 0;
        const feeInputs = document.querySelectorAll('input[name^="fee"]');
        feeInputs.forEach(feeInput => {
            totalFees += parseFloat(feeInput.value) || 0;
        });

        const adultName = document.getElementById("adult_name").value;

        fullForm.style.display = "none";
        summary.style.display = "block";

        summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees.toFixed(2)} in Fees.`;


        // /-------------------------------------\
        // |  ADD JAVASCRIPT FUNCTIONALITY HERE  |
        // \-------------------------------------/
    });
});

function participantTemplate(count) {
    return `
      <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
  `;
}