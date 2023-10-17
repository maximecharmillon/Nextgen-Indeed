const salaryRange = document.getElementById("salaryRange");
  const selectedSalary = document.getElementById("selectedSalary");

  salaryRange.addEventListener("input", function() {
    const selectedValue = parseInt(salaryRange.value);
    selectedSalary.textContent = `Select a salary : $${selectedValue}/month`;
});