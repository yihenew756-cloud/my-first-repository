
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "✕" : "☰";
            });

            // Close the mobile menu after clicking a navigation link
            navLinks.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", () => {
                        navLinks.classList.remove("open");
                                menuToggle.setAttribute("aria-expanded", "false");
                                        menuToggle.textContent = "☰";
                                            });
                                            });

                                            // Automatically display the current year
                                            document.getElementById("year").textContent = new Date().getFullYear();

                                            // Prevent selecting a date in the past
                                            const appointmentDate = document.getElementById("appointmentDate");
                                            const today = new Date();
                                            const localToday = [
                                                today.getFullYear(),
                                                    String(today.getMonth() + 1).padStart(2, "0"),
                                                        String(today.getDate()).padStart(2, "0")
                                                        ].join("-");

                                                        appointmentDate.min = localToday;

                                                        // Appointment form
                                                        const bookingForm = document.getElementById("bookingForm");
                                                        const formMessage = document.getElementById("formMessage");

                                                        bookingForm.addEventListener("submit", (event) => {
                                                            event.preventDefault();

                                                                const customerName = document.getElementById("customerName").value.trim();
                                                                    const customerPhone = document.getElementById("customerPhone").value.trim();
                                                                        const service = document.getElementById("service").value;
                                                                            const date = appointmentDate.value;

                                                                                if (!customerName || !customerPhone || !service || !date) {
                                                                                        formMessage.textContent = "Please complete all fields.";
                                                                                                return;
                                                                                                    }

                                                                                                        formMessage.textContent =
                                                                                                                `Thank you, ${customerName}! Your ${service} booking request ` +
                                                                                                                        `for ${date} has been prepared. Please contact the shop to confirm.`;

                                                                                                                            bookingForm.reset();

                                                                                                                                // Keep the minimum appointment date after resetting the form.
                                                                                                                                    appointmentDate.min = localToday;
                                                                                                                                    });