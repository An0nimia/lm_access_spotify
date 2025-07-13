// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to copy code to clipboard
async function copyCode() {
    const codeText = document.getElementById('code-text').textContent;
    const copyBtn = document.getElementById('copy-btn');
    const copyTextSpan = document.getElementById('copy-text');
    
    try {
        await navigator.clipboard.writeText(codeText);
        
        // Update button appearance
        copyBtn.classList.add('copied');
        copyTextSpan.textContent = '✅ Copied!';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyTextSpan.textContent = '📋 Copy Code';
        }, 2000);
        
    } catch (err) {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(codeText);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const copyBtn = document.getElementById('copy-btn');
    const copyTextSpan = document.getElementById('copy-text');
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            copyBtn.classList.add('copied');
            copyTextSpan.textContent = '✅ Copied!';
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyTextSpan.textContent = '📋 Copy Code';
            }, 2000);
        } else {
            copyTextSpan.textContent = '❌ Copy failed';
            setTimeout(() => {
                copyTextSpan.textContent = '📋 Copy Code';
            }, 2000);
        }
    } catch (err) {
        copyTextSpan.textContent = '❌ Copy failed';
        setTimeout(() => {
            copyTextSpan.textContent = '📋 Copy Code';
        }, 2000);
    }
    
    document.body.removeChild(textArea);
}

// Main function to initialize the page
function initializePage() {
    const code = getUrlParameter('code');
    const codeTextElement = document.getElementById('code-text');
    const codeSection = document.querySelector('.code-section');
    const infoSection = document.querySelector('.info-section');
    const errorSection = document.getElementById('error-section');
    
    if (code) {
        // Display the code
        codeTextElement.textContent = code;
        
        // Show code section and info
        codeSection.style.display = 'block';
        infoSection.style.display = 'block';
        errorSection.classList.add('hidden');
        
        // Update page title with truncated code
        const truncatedCode = code.length > 20 ? code.substring(0, 20) + '...' : code;
        document.title = `Authorization Code: ${truncatedCode}`;
        
    } else {
        // No code found, show error
        codeSection.style.display = 'none';
        infoSection.style.display = 'none';
        errorSection.classList.remove('hidden');
        
        document.title = 'No Authorization Code Found';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Handle browser back/forward navigation
window.addEventListener('popstate', initializePage);
