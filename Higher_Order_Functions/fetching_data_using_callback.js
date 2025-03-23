function fetchData(callback) {
  setTimeout(() => {
    console.log("Data loaded");
    callback(); // Calls the next function after data is loaded
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

// Fetch data first, then process it
fetchData(processData);
