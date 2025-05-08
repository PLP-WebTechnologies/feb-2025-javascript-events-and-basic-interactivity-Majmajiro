document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    initializeTabs();
  
    // Event Handling
    initializeEventHandling();
  
    // Interactive Elements
    initializeInteractiveElements();
  
    // Form Validation
    initializeFormValidation();
  });
  
  // =========== Tab System ===========
  function initializeTabs() {
    // Main tabs
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanes = document.querySelectorAll('.tab-pane');
  
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active class from all triggers and panes
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
  
        // Add active class to clicked trigger and corresponding pane
        trigger.classList.add('active');
        const tabId = trigger.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  
    // Nested tabs
    const nestedTabTriggers = document.querySelectorAll('.nested-tab-trigger');
    const nestedTabPanes = document.querySelectorAll('.nested-tab-pane');
  
    nestedTabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active class from all triggers and panes
        nestedTabTriggers.forEach(t => t.classList.remove('active'));
        nestedTabPanes.forEach(p => p.classList.remove('active'));
  
        // Add active class to clicked trigger and corresponding pane
        trigger.classList.add('active');
        const tabId = trigger.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // =========== Event Handling ===========
  function initializeEventHandling() {
    // Click counter
    const clickButton = document.getElementById('click-button');
    const clickCountDisplay = document.getElementById('click-count');
    let clickCount = 0;
  
    clickButton.addEventListener('click', () => {
      clickCount++;
      clickCountDisplay.textContent = clickCount;
    });
  
    // Hover events
    const hoverArea = document.getElementById('hover-area');
    const hoverStateDisplay = document.getElementById('hover-state');
  
    hoverArea.addEventListener('mouseenter', () => {
      hoverStateDisplay.textContent = 'Hovering';
    });
  
    hoverArea.addEventListener('mouseleave', () => {
      hoverStateDisplay.textContent = 'Not hovering';
    });
  
    // Keyboard events
    const keyPressedDisplay = document.getElementById('key-pressed');
  
    document.addEventListener('keydown', (e) => {
      keyPressedDisplay.textContent = e.key;
      
      // Reset after 2 seconds
      setTimeout(() => {
        keyPressedDisplay.textContent = 'None';
      }, 2000);
    });
  
    // Secret button (long press)
    const secretButton = document.getElementById('secret-button');
    let secretTimer = null;
  
    secretButton.addEventListener('mousedown', () => {
      secretTimer = setTimeout(() => {
        secretButton.classList.add('secret-active');
        secretButton.textContent = '🎉 SECRET DISCOVERED! 🎉';
        
        setTimeout(() => {
          secretButton.classList.remove('secret-active');
          secretButton.textContent = 'Hold me down...';
        }, 2000);
      }, 800);
    });
  
    secretButton.addEventListener('mouseup', () => {
      clearTimeout(secretTimer);
    });
  
    secretButton.addEventListener('mouseleave', () => {
      clearTimeout(secretTimer);
    });
  }
  
  // =========== Interactive Elements ===========
  function initializeInteractiveElements() {
    // Dynamic Button
    const dynamicButton = document.getElementById('dynamic-button');
    const buttonColors = ['bg-primary', 'bg-secondary', 'accent', 'success', 'warning'];
    const buttonTexts = ['Looking good!', 'Click again!', 'Keep going!', 'Nice job!', 'One more time!'];
    let colorIndex = 0;
    let textIndex = 0;
  
    dynamicButton.addEventListener('click', () => {
      // Remove all color classes
      buttonColors.forEach(color => {
        if (color === 'accent') {
          dynamicButton.style.backgroundColor = '';
        } else {
          dynamicButton.classList.remove(color);
        }
      });
  
      // Add next color class
      colorIndex = (colorIndex + 1) % buttonColors.length;
      if (buttonColors[colorIndex] === 'accent') {
        dynamicButton.style.backgroundColor = '#7e22ce';
      } else if (buttonColors[colorIndex] === 'success') {
        dynamicButton.style.backgroundColor = '#10b981';
      } else if (buttonColors[colorIndex] === 'warning') {
        dynamicButton.style.backgroundColor = '#f59e0b';
      } else {
        dynamicButton.classList.add(buttonColors[colorIndex]);
      }
  
      // Update text
      textIndex = (textIndex + 1) % buttonTexts.length;
      dynamicButton.textContent = buttonTexts[textIndex];
    });
  
    // Image gallery
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentImage = 0;
  
    // Function to update active image
    function showImage(index) {
      galleryImages.forEach(img => img.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));
      
      galleryImages[index].classList.add('active');
      indicators[index].classList.add('active');
      currentImage = index;
    }
  
    // Next and previous buttons
    nextButton.addEventListener('click', () => {
      const newIndex = (currentImage + 1) % galleryImages.length;
      showImage(newIndex);
    });
  
    prevButton.addEventListener('click', () => {
      const newIndex = (currentImage - 1 + galleryImages.length) % galleryImages.length;
      showImage(newIndex);
    });
  
    // Indicators
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        showImage(index);
      });
    });
  
    // Accordion
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isActive = trigger.classList.contains('active');
        
        // Toggle active class
        trigger.classList.toggle('active');
        content.classList.toggle('active');
      });
    });
  }
  
  // =========== Form Validation ===========
  function initializeFormValidation() {
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    const nameFeedback = document.getElementById('name-feedback');
    const emailFeedback = document.getElementById('email-feedback');
    const passwordFeedback = document.getElementById('password-feedback');
    const confirmPasswordFeedback = document.getElementById('confirm-password-feedback');
    
    const passwordRequirements = document.getElementById('password-requirements');
    const reqLength = document.getElementById('req-length');
    const reqUppercase = document.getElementById('req-uppercase');
    const reqLowercase = document.getElementById('req-lowercase');
    const reqNumber = document.getElementById('req-number');
  
    // Track which fields have been touched
    const touched = {
      name: false,
      email: false,
      password: false,
      confirmPassword: false
    };
  
    // Validation rules
    const validateName = (value) => {
      if (!value.trim()) {
        return { valid: false, message: 'Name is required' };
      }
      return { valid: true, message: 'Looks good!' };
    };
  
    const validateEmail = (value) => {
      if (!value) {
        return { valid: false, message: 'Email is required' };
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return { valid: false, message: 'Invalid email format' };
      }
      
      return { valid: true, message: 'Looks good!' };
    };
  
    const validatePassword = (value) => {
      if (!value) {
        return { valid: false, message: 'Password is required' };
      }
      
      const hasMinLength = value.length >= 8;
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      
      updatePasswordRequirement(reqLength, hasMinLength);
      updatePasswordRequirement(reqUppercase, hasUppercase);
      updatePasswordRequirement(reqLowercase, hasLowercase);
      updatePasswordRequirement(reqNumber, hasNumber);
      
      if (!hasMinLength || !hasUppercase || !hasLowercase || !hasNumber) {
        return { valid: false, message: 'Password does not meet requirements' };
      }
      
      return { valid: true, message: 'Strong password!' };
    };
  
    const validateConfirmPassword = (value, password) => {
      if (!value) {
        return { valid: false, message: 'Please confirm your password' };
      }
      
      if (value !== password) {
        return { valid: false, message: 'Passwords do not match' };
      }
      
      return { valid: true, message: 'Passwords match!' };
    };
  
    // Helper function to update password requirement elements
    function updatePasswordRequirement(element, isValid) {
      const icon = element.querySelector('.req-icon');
      
      if (isValid) {
        icon.textContent = '✓';
        icon.style.color = '#10b981';
        element.style.color = '#047857';
      } else {
        icon.textContent = '✗';
        icon.style.color = '#ef4444';
        element.style.color = '#6b7280';
      }
    }
  
    // Helper function to update feedback elements
    function updateFeedback(input, feedbackElement, validation) {
      feedbackElement.textContent = validation.message;
      
      if (validation.valid) {
        feedbackElement.className = 'feedback success';
        input.classList.remove('error');
        input.classList.add('success');
      } else {
        feedbackElement.className = 'feedback error';
        input.classList.remove('success');
        input.classList.add('error');
      }
    }
  
    // Add event listeners for input validation
    nameInput.addEventListener('blur', () => {
      touched.name = true;
      const validation = validateName(nameInput.value);
      updateFeedback(nameInput, nameFeedback, validation);
    });
  
    nameInput.addEventListener('input', () => {
      if (touched.name) {
        const validation = validateName(nameInput.value);
        updateFeedback(nameInput, nameFeedback, validation);
      }
    });
  
    emailInput.addEventListener('blur', () => {
      touched.email = true;
      const validation = validateEmail(emailInput.value);
      updateFeedback(emailInput, emailFeedback, validation);
    });
  
    emailInput.addEventListener('input', () => {
      if (touched.email) {
        const validation = validateEmail(emailInput.value);
        updateFeedback(emailInput, emailFeedback, validation);
      }
    });
  
    passwordInput.addEventListener('focus', () => {
      passwordRequirements.classList.remove('hidden');
    });
  
    passwordInput.addEventListener('blur', () => {
      touched.password = true;
      const validation = validatePassword(passwordInput.value);
      updateFeedback(passwordInput, passwordFeedback, validation);
      
      if (touched.confirmPassword) {
        const confirmValidation = validateConfirmPassword(confirmPasswordInput.value, passwordInput.value);
        updateFeedback(confirmPasswordInput, confirmPasswordFeedback, confirmValidation);
      }
    });
  
    passwordInput.addEventListener('input', () => {
      validatePassword(passwordInput.value);
      
      if (touched.password) {
        const validation = validatePassword(passwordInput.value);
        updateFeedback(passwordInput, passwordFeedback, validation);
      }
      
      if (touched.confirmPassword) {
        const confirmValidation = validateConfirmPassword(confirmPasswordInput.value, passwordInput.value);
        updateFeedback(confirmPasswordInput, confirmPasswordFeedback, confirmValidation);
      }
    });
  
    confirmPasswordInput.addEventListener('blur', () => {
      touched.confirmPassword = true;
      const validation = validateConfirmPassword(confirmPasswordInput.value, passwordInput.value);
      updateFeedback(confirmPasswordInput, confirmPasswordFeedback, validation);
    });
  
    confirmPasswordInput.addEventListener('input', () => {
      if (touched.confirmPassword) {
        const validation = validateConfirmPassword(confirmPasswordInput.value, passwordInput.value);
        updateFeedback(confirmPasswordInput, confirmPasswordFeedback, validation);
      }
    });
  
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Mark all fields as touched
      touched.name = true;
      touched.email = true;
      touched.password = true;
      touched.confirmPassword = true;
      
      // Validate all fields
      const nameValidation = validateName(nameInput.value);
      const emailValidation = validateEmail(emailInput.value);
      const passwordValidation = validatePassword(passwordInput.value);
      const confirmValidation = validateConfirmPassword(confirmPasswordInput.value, passwordInput.value);
      
      updateFeedback(nameInput, nameFeedback, nameValidation);
      updateFeedback(emailInput, emailFeedback, emailValidation);
      updateFeedback(passwordInput, passwordFeedback, passwordValidation);
      updateFeedback(confirmPasswordInput, confirmPasswordFeedback, confirmValidation);
      
      // Check if all fields are valid
      if (nameValidation.valid && emailValidation.valid && passwordValidation.valid && confirmValidation.valid) {
        showToast('Form Submitted Successfully!', 'All validations passed. Your form data is ready to process.', 'success');
        
        // Reset form
        form.reset();
        touched.name = false;
        touched.email = false;
        touched.password = false;
        touched.confirmPassword = false;
        
        // Reset styles
        nameInput.classList.remove('success');
        emailInput.classList.remove('success');
        passwordInput.classList.remove('success');
        confirmPasswordInput.classList.remove('success');
        
        nameFeedback.textContent = '';
        emailFeedback.textContent = '';
        passwordFeedback.textContent = '';
        confirmPasswordFeedback.textContent = '';
        
        passwordRequirements.classList.add('hidden');
      } else {
        showToast('Form Has Errors', 'Please fix the highlighted errors before submitting.', 'error');
      }
    });
  }
  
  // Toast notification
  function showToast(title, message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    
    // Set content
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    // Set type
    toast.className = 'toast';
    toast.classList.add(type);
    
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
      
      // Hide after 5 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    }, 100);
  }
  