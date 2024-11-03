document.addEventListener("DOMContentLoaded", function() {
    // Get all tab links and tab content sections
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabSections = document.querySelectorAll(".tab-section");

    // Function to switch tabs
    function switchTab(e) {
        e.preventDefault();
        const targetTab = this.getAttribute("data-tab");

        // Hide all tab sections
        tabSections.forEach(function(section) {
            section.classList.add("hidden");
        });

        // Remove active state from all tab links
        tabLinks.forEach(function(link) {
            link.classList.remove("active");
        });

        // Show the selected tab section
        const activeTabSection = document.getElementById(targetTab);
        if (activeTabSection) {
            activeTabSection.classList.remove("hidden");
        }

        // Set the clicked tab link to active
        this.classList.add("active");
    }

    // Add click event listener to all tab links
    tabLinks.forEach(function(link) {
        link.addEventListener("click", switchTab);
    });
});
