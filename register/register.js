import { participantTemplate } from './Templates.js';
let participantCount = 1;

document.addEventListener("DOMContentLoaded", () => {
    const addParticipantButton = document.getElementById("add");
    const participantsFieldset = document.querySelector("fieldset.participants");
    const fullForm = document.getElementById("form");
    const summary = document.getElementById("summary");

    addParticipantButton.addEventListener("click", () => {
        participantCount += 1;
        const newParticipantHTML = participantTemplate(participantCount);
        const newParticipantDiv = document.createElement("div");
        newParticipantDiv.innerHTML = newParticipantHTML;
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
        summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in fees.`;
    });
});
