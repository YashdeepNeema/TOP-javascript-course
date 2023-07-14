// Open the pop-up window
function openPopup() {
    document.getElementById("popup-container").style.display = "flex";
  }
  
  // Close the pop-up window
  function closePopup() {
    document.getElementById("popup-container").style.display = "none";
  }
  
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    
    // Do something with the collected data
    console.log("Name:", name);
    console.log("Email:", email);
    
    // Close the pop-up window
    closePopup();
  }
  
  // Attach event listeners
  document.getElementById("popup-form").addEventListener("submit", handleSubmit);
  