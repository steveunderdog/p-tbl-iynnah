document.addEventListener('DOMContentLoaded', function() {
    const planOptionsIynna = document.querySelectorAll('.plan-option-iynna');
    const planContentsIynna = document.querySelectorAll('.plan-content-iynna');

    planOptionsIynna.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsIynna.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsIynna.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionIynna = document.querySelector('.expandable-section-iynna');
    const expandableContentIynna = document.querySelector('.expandable-content-iynna');

    expandableSectionIynna.addEventListener('click', function() {
        expandableContentIynna.style.display = expandableContentIynna.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnIynna = document.getElementById('founder15-book-now-iynna');
    const founder15ScheduleEmbedIynna = document.getElementById('founder15-schedule-embed-iynna');
    const founder15PackageDetailsIynna = document.getElementById('founder15-package-details-iynna');
    const founder15BackToFeaturesIynna = document.getElementById('founder15-back-to-features-iynna');

    founder15BookNowBtnIynna.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedIynna.style.display = 'block';
        founder15PackageDetailsIynna.style.display = 'none';
        founder15BackToFeaturesIynna.style.display = 'block';
    });

    founder15BackToFeaturesIynna.addEventListener('click', function() {
        founder15ScheduleEmbedIynna.style.display = 'none';
        founder15PackageDetailsIynna.style.display = 'block';
        founder15BackToFeaturesIynna.style.display = 'none';
    });

    const growthBookNowBtnIynna = document.getElementById('growth-book-now-iynna');
    const growthScheduleEmbedIynna = document.getElementById('growth-schedule-embed-iynna');
    const growthPackageDetailsIynna = document.getElementById('growth-package-details-iynna');
    const growthBackToFeaturesIynna = document.getElementById('growth-back-to-features-iynna');

    growthBookNowBtnIynna.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedIynna.style.display = 'block';
        growthPackageDetailsIynna.style.display = 'none';
        growthBackToFeaturesIynna.style.display = 'block';
    });

    growthBackToFeaturesIynna.addEventListener('click', function() {
        growthScheduleEmbedIynna.style.display = 'none';
        growthPackageDetailsIynna.style.display = 'block';
        growthBackToFeaturesIynna.style.display = 'none';
    });

    const accelerateBookNowBtnIynna = document.getElementById('accelerate-book-now-iynna');
    const accelerateScheduleEmbedIynna = document.getElementById('accelerate-schedule-embed-iynna');
    const acceleratePackageDetailsIynna = document.getElementById('accelerate-package-details-iynna');
    const accelerateBackToFeaturesIynna = document.getElementById('accelerate-back-to-features-iynna');

    accelerateBookNowBtnIynna.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedIynna.style.display = 'block';
        acceleratePackageDetailsIynna.style.display = 'none';
        accelerateBackToFeaturesIynna.style.display = 'block';
    });

    accelerateBackToFeaturesIynna.addEventListener('click', function() {
        accelerateScheduleEmbedIynna.style.display = 'none';
        acceleratePackageDetailsIynna.style.display = 'block';
        accelerateBackToFeaturesIynna.style.display = 'none';
    });
});
