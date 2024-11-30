// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Buttons
    const themeToggleBtn = document.getElementById('theme-toggle');
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const mobileDarkIcon = document.getElementById('mobile-theme-toggle-dark-icon');
    const mobileLightIcon = document.getElementById('mobile-theme-toggle-light-icon');

    // Function to update theme icons
    const updateThemeIcons = (isDark) => {
        if (isDark) {
            // Desktop Icons
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');

            // Mobile Icons
            mobileDarkIcon.classList.add('hidden');
            mobileLightIcon.classList.remove('hidden');
        } else {
            // Desktop Icons
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');

            // Mobile Icons
            mobileDarkIcon.classList.remove('hidden');
            mobileLightIcon.classList.add('hidden');
        }
    };

    // Function to toggle theme
    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const isDark = htmlElement.classList.toggle('dark');
        updateThemeIcons(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // Initialize theme based on saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    } else {
        // If no preference is saved, check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
            updateThemeIcons(true);
        } else {
            document.documentElement.classList.remove('dark');
            updateThemeIcons(false);
        }
    }

    // Event listener for desktop toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Event listener for mobile toggle button
    if (mobileThemeToggleBtn) {
        mobileThemeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Mobile menu toggle is handled via onclick in HTML

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            // Close mobile menu after clicking
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Add hover effects to hero buttons (optional)
    document.querySelectorAll('#home a').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
    });

    // Initialize AOS
    AOS.init({
        duration: 1200,
        once: true,
    });
});
