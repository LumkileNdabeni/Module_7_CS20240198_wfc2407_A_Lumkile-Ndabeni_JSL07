document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      // Store the values from the input fields
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      // Check if required fields are filled out
      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields'); // Alert if fields are empty
          return; // Exit the function early
      }

      // Generate certificate content dynamically
      certificateContent.innerHTML = `    
      <h1>Certificate of Achievement</h1>
      <p>This is to certify that </p>
      <h2>${studentName}</h2>
      <p> has almost completed the </p>
      <h2>${courseName}</h2>     
      <p>with legendary perseverance and cat-like curiosity for never giving up 🏆🐱</p>
      <img src="logo.png" alt="Logo" class="logo"> 
      <p>${personalMessage}</p> 
      `;

      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if (courseNameInput) courseNameInput.value = ''; // Clear course name input if it exists
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; // Hide the modal
  });
});