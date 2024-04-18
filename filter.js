//js
// Sample data for areas (you can replace it with your actual data)
const areas = [
    { id: 1, name: "Area 1" },
    { id: 2, name: "Area 2" },
    { id: 3, name: "Area 3" }
  ];
  
  // Function to populate areas dropdown
  function populateAreas() {
    const areaSelect = document.getElementById("areaSelect");
    areas.forEach(area => {
      const option = document.createElement("option");
      option.value = area.id;
      option.textContent = area.name;
      areaSelect.appendChild(option);
    });
  }
  
  // Function to fetch services based on selected area
  function getServices() {
    const areaId = document.getElementById("areaSelect").value;
    // Here you can make an AJAX request to your backend to fetch services
    // For simplicity, I'm just simulating the response
    const services = [
      "Service 1",
      "Service 2",
      "Service 3"
    ];
    showServices(services);
  }
  
  // Function to display services
  function showServices(services) {
    const servicesList = document.getElementById("servicesList");
    servicesList.innerHTML = "<h2>Services Available</h2>";
    services.forEach(service => {
      const serviceItem = document.createElement("div");
      serviceItem.textContent = service;
      servicesList.appendChild(serviceItem);
    });
  }
  
  // Populate areas dropdown when the page loads
  window.onload = populateAreas;